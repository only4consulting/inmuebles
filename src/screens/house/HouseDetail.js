import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Container, Content } from "native-base";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Constants } from "../../config";
import { Headers, Modals, ListItems, Buttons } from "../../components";
import i18n from '../../i18n';
import { buildItemData } from '../../utils/utilDashboard';

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
    const data = this.props.navigation.getParam('data', 'NO_DATA');
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
          <View style={{ height: 200 }}>
            <Image
              source={{ uri: data.imagenes[1] }}
              style={styles.image}
              resizeMode="cover"
            />
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
  }
};

export default HouseDetail;
