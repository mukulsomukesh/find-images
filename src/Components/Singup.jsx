import { FormControl, FormLabel, Input, InputGroup, InputRightElement, Button, VStack, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { SingupFun } from '../Redux/AuthReducer/action';
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";


function Singup() {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [singupBtnDisable, setSingupBtnDisable] = useState()
    const [singup, setSingup] = useState([{
        name: "",
        email: "",
        pass: ""
    }])

    const handleClick = () => setShow(!show)

    function handelSingup() {
        setSingupBtnDisable(true)
        dispatch(SingupFun(singup.email, singup.pass, singup.name))
        setSingup({ name: "", email: "", pass: "" })
        setSingupBtnDisable(false)
    }

    return (
        <>
            <FormControl id="email">
                <FormLabel>First Name</FormLabel>
                <Input value={singup.name} placeholder="Name" onChange={(event) => setSingup((prev) => ({ ...prev, name: event.target.value }))} />

                <FormLabel mt="20px">Email address</FormLabel>
                <Input value={singup.email} placeholder="example@gmail.com" onChange={(event) => setSingup((prev) => ({ ...prev, email: event.target.value }))} />

                <FormLabel mt="20px" >Password</FormLabel>
                <InputGroup size='md'>
                    <Input
                        placeholder="********"
                        value={singup.pass} onChange={(event) => setSingup((prev) => ({ ...prev, pass: event.target.value }))}
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                    // placeholder='Enter password'
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>

            </FormControl>

            <Button w="full" mt="20px" bg="#3b5998" color="white" disabled={singupBtnDisable} onClick={() => { handelSingup() }}> Singup </Button>
        </>
    )
}

export default Singup