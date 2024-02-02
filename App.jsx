import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Button, Center, Heading } from '@chakra-ui/react';
import Counter from './assets/Counter';
function App() {


  return (
    <>
    <Box backgroundImage={"https://mykaleidoscope.ru/x/uploads/posts/2023-05/1685098062_mykaleidoscope-ru-p-oboi-v-stile-islam-krasivo-40.jpg"}>
    <Heading maxW={150} bgGradient='linear(to-r, green.200, pink.500)' color={"white"} ml={620}>ZIKRLAR{}</Heading>
    <br /><br />
    
    <div>
      
      <Counter  counterIndex={"SUBAHANALLAH"} />
      <Counter counterIndex={"ALHAMDULILLAH"} />
      <Counter counterIndex={"LA ILAHA ILLALLAH"} />
      <Counter counterIndex={"ALLOHU AKBAR"} />
      <Counter counterIndex={"ASTAG'FIRULLOH"} />
    </div>
    </Box>
    </>
  )
}

export default App
