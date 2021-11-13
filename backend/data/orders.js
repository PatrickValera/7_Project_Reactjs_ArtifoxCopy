const orders=[
    {
    userId:"617191eee17bc955c1ce1d1d",
    orderItems:[{
        name: "test",
        qty:1,
        price: 111,
        productId:"617191efe17bc955c1ce1d20"
    }],
    shippingAddress:{
      firstName:"test",
      lastName: "test",
      company: "test",
      phoneNum: "test",
      email: "test",
      emailUpdate: false,
      address: "test",
      city: "test",
      country: "test",
    //   postalCode: { type: String, required: true },
    },
    PaymentDetail:{
        prices:{
            total:1,
            shipping:1,
            taxes:1
        },
        method:"paypal"
    },
    // isDelivered:{
    //     type:Boolean,
    //     required:true,
    //     default:false
    // }

}
]
export default orders