/** General */
//========
export const APP_NAME = "House Rental";
export const WELCOME_TO = "WELCOME TO";
export const INTRO_TEXT =
  "House Rental helps you get offers and updates on apartments and houses around and outside your location.";
export const GET_STARTED = "GET STARTED";
export const WELCOME = "WELCOME";
export const SIGN_IN_TEXT = "Sign in to your House Rental account.";
export const CREATE_AN_ACCOUNT = "Tap here to create an account";
export const HI_THERE = "HI THERE";
export const REGISTER_TEXT = "Create a House Rental account.";
export const TYPE_LOCATION = "Type location";
export const NOTIFICATIONS = "Notifications";
export const NOTIFICATIONS_PERMISSION_TEXT =
  "Get notified about new offers and updates";
export const NOTIFICATIONS_PERMISSION_ALLOW_TEXT = "Enable Push Notifications";
export const DO_NOT_ALLOW = "Do not allow";
export const CONTACT_PERSON_TEXT = "The contact person for this apartment is: ";
export const CALL = "Call";
export const CONTACT_OWNER = "Contact Owner";
export const FILTER = "Filter";
export const FILTER_CATEGORIES = [
  {
    title: "Tenant Type",
    filters: ["Family", "Couple", "Single", "Roommates", "Group"]
  },
  {
    title: "Apartment Type",
    filters: ["1BHK", "2BHK", "Dormitory", "Shared", "Room & Bath"]
  },
  {
    title: "Facilities",
    filters: [
      "Elevator",
      "2 Baths",
      "1 Kitchen",
      "2 Rooms",
      "24/7 Water",
      "Constant Power",
      "Parking"
    ]
  }
];
export const ENABLE_LOCATION_SERVICES = "Enable location services";
export const LOCATION_SERVICES_PERMISSION_TEXT = "Find apartments around you";
export const LOCATION_SERVICES_PERMISSION_ALLOW_TEXT = "Enable";

export const SHARE_CONTACT_DETAILS = "Share contact details";
export const CONTACT_PERMISSION_TEXT =
  "Grant House Rental access to your contacts";
export const CONTACT_PERMISSION_ALLOW_TEXT = "Share";

export const RENTAL_LISTINGS = [
  {
    heading: "1BHK Apartments near you.",
    rentalItems: [
      {
        key: "1",
        image: require("../assets/images/rentals/rental2.jpeg"),
        title: "1BHK Residential apartment for sale",
        price: "1,900"
      },
      {
        key: "2",
        image: require("../assets/images/rentals/rental3.jpeg"),
        title: "1BHK Residential apartment for rent",
        price: "3,500"
      },
      {
        key: "3",
        image: require("../assets/images/rentals/rental1.jpeg"),
        title: "1BHK shared apartment for rent",
        price: "5,000"
      },
      {
        key: "4",
        image: require("../assets/images/rentals/rental5.jpeg"),
        title: "1BHK Residential apartment for sale",
        price: "11,500"
      }
    ]
  },
  {
    heading: "2BHK Apartments near you.",
    rentalItems: [
      {
        key: "1",
        image: require("../assets/images/rentals/rental3.jpeg"),
        title: "2BHK Residential apartment for sale",
        price: "1,150"
      },
      {
        key: "2",
        image: require("../assets/images/rentals/rental4.jpeg"),
        title: "2BHK 2Baths apartment for rent",
        price: "2,500"
      },
      {
        key: "3",
        image: require("../assets/images/rentals/rental2.jpeg"),
        title: "2BHK shared apartment for rent",
        price: "11,500"
      },
      {
        key: "4",
        image: require("../assets/images/rentals/rental3.jpeg"),
        title: "2BHK Residential apartment for sale",
        price: "11,500"
      }
    ]
  },
  {
    heading: "Apartments selling around you",
    rentalItems: [
      {
        key: "1",
        image: require("../assets/images/rentals/rental5.jpeg"),
        title: "Mansion for sale",
        price: "4,850"
      },
      {
        key: "2",
        image: require("../assets/images/rentals/rental3.jpeg"),
        title: "Duplex for rent",
        price: "1,500"
      },
      {
        key: "3",
        image: require("../assets/images/rentals/rental5.jpeg"),
        title: "3-storey building for sale",
        price: "6,500"
      }
    ]
  }
];

export const FILTER_RESULT = [
  {
    key: "1",
    image: require("../assets/images/rentals/rental2.jpeg"),
    title: "1BHK Residential apartment for sale",
    price: "1,500"
  },
  {
    key: "2",
    image: require("../assets/images/rentals/rental3.jpeg"),
    title: "1BHK Residential apartment for rent",
    price: "3,500"
  },
  {
    key: "3",
    image: require("../assets/images/rentals/rental1.jpeg"),
    title: "1BHK shared apartment for rent",
    price: "5,000"
  },
  {
    key: "4",
    image: require("../assets/images/rentals/rental5.jpeg"),
    title: "1BHK Residential apartment for sale",
    price: "11,500"
  },
  {
    key: "5",
    image: require("../assets/images/rentals/rental2.jpeg"),
    title: "1BHK Residential apartment for sale",
    price: "1,500"
  },
  {
    key: "6",
    image: require("../assets/images/rentals/rental3.jpeg"),
    title: "1BHK Residential apartment for rent",
    price: "3,500"
  },
  {
    key: "7",
    image: require("../assets/images/rentals/rental1.jpeg"),
    title: "1BHK shared apartment for rent",
    price: "5,000"
  },
  {
    key: "8",
    image: require("../assets/images/rentals/rental5.jpeg"),
    title: "1BHK Residential apartment for sale",
    price: "11,500"
  }
];

export const HOUSE_DETAILS = [
  {
    icon: "layout",
    title: "Layout",
    subtitle: "2 Bedrooms, 2 Bathrooms, 1 Hall, 1 Kitchen"
  },
  {
    icon: "info",
    title: "Rent Details",
    subtitle: "13, 500 (negotiable) - Maintenance (1,500/month)"
  },
  {
    icon: "users",
    title: "Tenant Type",
    subtitle: "Family / Bachelor"
  },
  {
    icon: "maximize-2",
    title: "Size",
    subtitle: "Total area of 1000 Sq. Ft"
  },
  {
    icon: "map",
    title: "Address",
    subtitle: "3995 Capitol Avenue, Mount Meridian, Indiana"
  }
];
//========

/** Forms */
//========
export const FULL_NAME = "Full name";
export const MOBILE_NUMBER = "Mobile Number";
export const PASSWORD = "Password";
export const LOGIN = "Login";
export const REGISTER = "Register";
export const SAVE = "Save";
export const DONE = "Done";
export const PRICE_RANGE = "Price Range";
export const PROFILE_NAME = "Rango, The Sheriff";
export const PROFILE_MOBILE_NUMBER = "+123-4567-890";
export const ENABLE_LOCATION = "Enable location";
//========

/** Tabs */
//========
export const EXPLORE_TAB_LABELS = [
  "destacados",
  "recientes",
  "populares",
  "inmobiliarias"
];
export const BOTTOM_MENU_ITEMS = [
  { icon: "home", route: "_houseList" },
  { icon: "sliders", route: "_filter" },
  { icon: "bell", route: "_notifications" },
  { icon: "user", route: "_profile" }
];
//========

/** Dummy data */
//========
export const SAMPLE_NOTIFICATIONS = [
  {
    title: "New offer",
    description:
      "A 2BHK residential apartment is available for rent around you.",
    image: require("../assets/images/house.png")
  },
  {
    title: "Apartment update",
    description:
      "Pets are no longer allowed in residential apartments at your location.",
    image: require("../assets/images/avatar.png")
  },
  {
    title: "Update",
    description: "The 1BHK apartment along Ring Road has been taken.",
    image: require("../assets/images/house.png")
  },
  {
    title: "New offer",
    description:
      "A 2BHK residential apartment is available for rent in a sample area.",
    image: require("../assets/images/house.png")
  },
  {
    title: "New offer",
    description:
      "A 2BHK residential apartment is available for rent in a sample area.",
    image: require("../assets/images/avatar.png")
  },
  {
    title: "New offer",
    description:
      "A 2BHK residential apartment is available for rent in a sample area.",
    image: require("../assets/images/avatar.png")
  },
  {
    title: "New offer",
    description:
      "A 2BHK residential apartment is available for rent in a sample area.",
    image: require("../assets/images/house.png")
  }
];
//========
