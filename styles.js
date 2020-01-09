import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
  alignItems: 'center',
  justifyContent: 'space-between',
  },
  centerGroup: {
  alignItems: 'center',
  justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
  },
  listBox: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 3,
      width: 6
    },
    width:'90%',
    height:'70%',
    borderRadius:25,

  },
  listItem: {
    alignSelf:'center',
    backgroundColor: 'rgba(0, 0, 0, .3)',
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 3,
      width: 6
    },
    width:'90%',
    height:50,
    borderRadius:12,
    marginTop:'10%'

  },
  cartListItem: {
    alignSelf:'center',
    backgroundColor: 'rgba(0, 0, 0, .3)',
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 3,
      width: 6
    },
    width:'95%',
    height:150,
    borderRadius:12,
    marginTop:'10%'

  },
  paymentItem: {
    alignSelf:'center',
    backgroundColor: '#2F496C',
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 3,
      width: 6
    },
    width:'90%',
    height:120,
    borderRadius:12,
    marginTop:'10%'

  },
  cartBox: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 3,
      width: 6
    },
    width:300,
    height:200,
    borderRadius:25,
    marginBottom: '5%'
  },
  cartItem: {
    width:300,
    height:50,
    borderRadius:12,
  },
  iconBg: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:5,
    borderRadius: 40,
    width: 40,
    height: 40,
    backgroundColor: '#E23E81',
  },
  cardsIconBg: {
    alignItems: 'center',
    justifyContent:'center',
    marginTop:12,
    borderRadius: 40,
    width: 180,
    height: 30,
  },

  listTxt: {
    marginTop:14,
    fontSize:18,
    color:'white',
    fontWeight:'600'
  },
  title: {
    fontSize: 22,
    color: '#ffff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#ffff',
    fontWeight: 'bold',

  },
  normalTxt: {
    fontSize: 16,
    color: '#ffff',

  },
  signInBox: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  roundImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 5
  },
  cameraButton: {
  height: 100,
  width: 100,
  borderRadius: 50,
  alignSelf: 'center',
  backgroundColor: '#fff',
  marginBottom: 50
},
  avatar: {
    marginTop:-10,
    marginRight: 20
  },
  img: {
    width: 133,
    height: 147.13,
    alignSelf: 'center',
    marginBottom: 5
  },
  txt: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18,
  },
  btn: {
    alignSelf: 'center',
    marginBottom:50,
  },
  btnRegister: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 3,
      width: 6
    },
    width:294,
    height:50,
    borderRadius:25
  },
  btnLogin: {
    backgroundColor: 'rgba(255, 255, 255, .8)',
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 3,
      width: 6
    },
    width:294,
    height:50,
    borderRadius:25
  },
  btnCancel: {
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 3,
      width: 6
    },
    width:'80%',
    height:50,
    borderRadius:25
  },
  btnEdit: {
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderWidth: 3,
    borderColor: '#fff',
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 3,
      width: 6
    },
    width:110,
    height:30,
    borderRadius:12,
    alignSelf:'center',
    fontSize:14,
  },
  btnGoogle: {
    backgroundColor: 'rgba(255, 255, 255, .9)',
    shadowColor: "black",
    borderColor: 'black',
    borderWidth: 2.5,
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 3,
      width: 6
    },
    width:294,
    height:50,
    borderRadius:25
  },
  button: {
    marginTop: 20,
    paddingVertical:10,
    alignItems: 'center',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 5,
    width: 200
  },
  border: {
    width: '85%',
    color: 'white',
    margin: 10,
    padding: 15,
    fontSize: 24,
    fontWeight: 'bold',
    borderColor: '#d3d3d3',
    borderBottomWidth: 2,
    textAlign: 'center'
  },
  footer: {
    justifyContent: 'flex-end',
  },
});
