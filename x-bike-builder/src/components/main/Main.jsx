import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../header/Header'
import Home from '../home/Home'
import Build from '../build/Build'
import Footer from '../footer/Footer'
import axios from 'axios'
import { BASE_URL } from '../../global'

const Main = () => {

  const [userData, setUserData] = useState(null)
  const [updateUser, setUpdateUser] = useState(null)



    // const fetchUpdatedUserData = async () => {
    //     try {
    //       if (userData !== null) {
    //         const updatedUserData = await axios.get(`${BASE_URL}users/${userData._id}`)
    //         console.log('Updated user data:', updatedUserData.data)
    //         setUserData(updatedUserData.data)
    //         return updatedUserData.data;
    //       } else {
    //         console.log('User data is null.')
    //       }
    //     } catch (error) {
    //       console.error('Error fetching updated user data:', error)
    //       throw error
    //     }
    //   }

  useEffect(() => {
    const fetchUserData = async () => {
          try {
            if (userData !== null) {
              const updatedUserData = await axios.get(`${BASE_URL}users/${userData._id}`)
              console.log('Updated user data:', updatedUserData.data)
              setUserData(updatedUserData.data)
              return updatedUserData.data;
            } else {
              console.log('User data is null.')
            }
          } catch (error) {
            console.error('Error fetching updated user data:', error)
            throw error
          }
        }
          // const updatedUserData = await fetchUpdatedUserData()
          // if (updatedUserData && updatedUserData.cart) {

          // const currentOrderId = updatedUserData.cart.current_order._id 
          // const order = updatedUserData.cart.current_order

          // let menu_item_cost = 0
          // for (let i = 0; i < order.menu_item.length; i++) {
          //     menu_item_cost += order.menu_item[i].base_price
          // }
          // console.log('menu_item_cost', menu_item_cost)
          // let custom_item_cost = 0
          // for (let i = 0; i < order.custom_pizza.length; i++) {
          //     custom_item_cost += 10 + order.custom_pizza[i].toppings.length + order.custom_pizza[i].cheeses.length
          // }
          // console.log('custom_item_cost', custom_item_cost) 

          // const body = {total_price: `$${menu_item_cost + custom_item_cost}`}
          // await axios.put(`${BASE_URL}orders/${currentOrderId}`, body)
          // const response3 = (await axios.get(`${BASE_URL}users/${userData._id}`)).data
          // setUserData(response3);
    //   }
    //   } catch (error) {
    //     console.error("Error fetching user data: ", error);
    //   }
    // }
    fetchUserData()
    console.log('userdata updated: ', userData)
      }, [updateUser])


  return (
    <>
      <div className='main'>
        <div className='header-container'>
          <Header userData={userData} setUserData={setUserData}/>
        </div>
        <Routes>
            <Route path='/' element={<Home userData={userData} setUserData={setUserData}/>}/>
            <Route path='/Build' element={<Build userData={userData} setUserData={setUserData} setUpdateUser={setUpdateUser}/>}/>
          </Routes>
      </div>
      <Footer />
    </>
  )
}

export default Main