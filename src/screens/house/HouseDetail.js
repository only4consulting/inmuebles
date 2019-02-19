import React, { Component } from 'react';
import { View, Image, Text, Animated, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Container, Content } from 'native-base';
import { Headers, Modals, ListItems, Buttons } from '../../components';
import i18n from '../../i18n';
import { buildItemData } from '../../utils/utilDashboard';

//Acho del dispositovo, de la barra y espaciado
const deviceWidth = Dimensions.get('window').width
const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 10

class HouseDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contactOwnerModalVisible: false
    };
  }

  createHouseDetailsItems(data) {
    let res = [];
    const ITEMS = buildItemData(data);
    for (let i = 0; i < ITEMS.length; i++) {
      const item = ITEMS[i];
      res.push(<ListItems.HouseDetailListItem key={i} {...item} />);
    }

    return res;
  }

  render() {

    //Estos son los parámetros que me envío
    const data = this.props.navigation.getParam('data', 'NO_DATA');

    //Array con los imágenes
    const images = data.imagenes;

    //Cantidad de imágenes
    const numItems = images.length

    //Ancho de cada ítem
    const itemWidth = (FIXED_BAR_WIDTH / numItems) - ((numItems - 1) * BAR_SPACE)

    //????
    const animVal = new Animated.Value(0)

    //Array para renderizar las imágenes y las barras
    let imageArray = []
    let barArray = []

    //Recorrer cada una de las imagenes y devolverla en un elemento UI 
    images.forEach((image, i) => {

      //Agregar la imagen al array
      const thisImage = (
        <Image
          key={`image${i}`}
          source={{ uri: image }}
          style={{ width: deviceWidth }}
          resizeMode="cover"
        />
      )
      imageArray.push(thisImage)

      const scrollBarVal = animVal.interpolate({
        inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
        outputRange: [-itemWidth, itemWidth],
        extrapolate: 'clamp',
      })

      //Agregar la barra animada
      const thisBar = (
        <View
          key={`bar${i}`}
          style={[
            styles.track,
            {
              width: itemWidth,
              marginLeft: i === 0 ? 0 : BAR_SPACE,
            },
          ]}
        >
          <Animated.View

            style={[
              styles.bar,
              {
                width: itemWidth,
                transform: [
                  { translateX: scrollBarVal },
                ],
              },
            ]}
          />
        </View>
      )
      barArray.push(thisBar)
    })

    return (
      <SafeAreaView
        style={{ backgroundColor: "#FFF", flex: 1 }}
        forceInset={{ top: "never" }}
      >
        <Container>
          <Headers.BackButtonHeader
            title={i18n.t('detalle_inmueble')}
            nomargin={true}
            onBackPress={() => this.props.navigation.goBack()}
          />
          <View style={{
            height: 200,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={10}
              pagingEnabled
              onScroll={
                Animated.event(
                  [{ nativeEvent: { contentOffset: { x: animVal } } }]
                )
              }>
              {imageArray}
            </ScrollView>
            <View style={styles.barContainer}>
              {barArray}
            </View>
          </View>
          <Content style={styles.content}>
            <Text style={styles.title}>
              {data.descripcion}
            </Text>
            <Text style={styles.subtitle}>
              {data.direccion}, {data.ciudad}, {data.provincia}
            </Text>

            <Text style={styles.price}>{data.precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
            <Text style={styles.subtitle}>{i18n.t(data.moneda)}</Text>

            <View style={{ marginBottom: 20 }}>
              {this.createHouseDetailsItems(data)}
            </View>
          </Content>

          <View style={{ padding: 8 }}>
            <Buttons.LgButton
              text={i18n.t('contactar_inmo') + ' ' + data.inmobiliaria_nombre}
              onPress={() => this.setState({ contactOwnerModalVisible: true })}
            />
          </View>

          {this.state.contactOwnerModalVisible === true && (
            <Modals.ContactOwnerModal
              onCallPress={() =>
                this.setState({ contactOwnerModalVisible: false })
              }
            />
          )}
        </Container>
      </SafeAreaView>
    );
  }
}

const styles = {
  content: {
    padding: 16
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    alignSelf: "stretch"
  },
  title: {
    fontFamily: "Avenir-Medium",
    fontSize: 15,
    color: "#000"
  },
  subtitle: {
    fontFamily: "Avenir-Medium",
    fontSize: 13,
    color: "#5F5F5F",
    marginTop: 5,
    marginRight: 20
  },
  price: {
    fontFamily: "Lato-Black",
    fontSize: 17,
    color: "#000",
    marginTop: 15
  },
  icon: {
    color: "#5F5F5F",
    fontSize: 25,
    alignSelf: "center"
  },
  container: {
    flexDirection: "row",
    marginTop: 20
  },
  barContainer: {
    position: 'absolute',
    zIndex: 2,
    top: 40,
    flexDirection: 'row',
  },
  track: {
    backgroundColor: '#ccc',
    overflow: 'hidden',
    height: 2,
  },
  bar: {
    backgroundColor: '#5294d6',
    height: 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
};

export default HouseDetail;
