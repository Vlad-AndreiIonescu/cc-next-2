import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input, Button, Flex, Text, Divider, useToast, color
  } from '@chakra-ui/react'
  import React from 'react'
import Link from 'next/link'


  

export default function InsertPage() {
    const insertRecord = (event) => {
		event.preventDefault();
		const numeEchipa = document.getElementById("numeEchipa").value;
		const antrenor = document.getElementById("antrenor").value;
        const tara = document.getElementById("tara").value;
        const nrCampionate = document.getElementById("nrCampionate").value;
		const data = {numeEchipa, antrenorActual: antrenor, tara, nrCampionate};
        console.log(data)
		fetch("/api/records", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then(() => {
			console.log("New record inserted");
			document.getElementById("numeEchipa").value = "";
			document.getElementById("antrenor").value = "";
            document.getElementById("tara").value = "";
            document.getElementById("nrCampionate").value = "";
		});

    addToast();
    }

   
      const toast = useToast()
      const toastIdRef = React.useRef()
    
      function close() {
        if (toastIdRef.current) {
          toast.close(toastIdRef.current)
        }
      }
    
      function closeAll() {
        // you may optionally pass an object of positions to exclusively close
        // keeping other positions opened
        // e.g. `{ positions: ['bottom'] }`
        toast.closeAll()
      }
    
      function addToast() {
        toastIdRef.current = toast({ description: 'Record added', colorScheme:'green', duration: 3000, status: 'success' })
      }
      

	return (
		<section>
            <Text className="w-[500px] mx-auto text-center text-6xl" color='#F56565' mt='10'>Add new card</Text>
            
            <div className="container px-6 py-10 mx-auto">  
            <div> 
			<FormControl  >
                <FormLabel>Team Name</FormLabel>
                <Input  id="numeEchipa" type='tel' placeholder='Team Name is ...' />
                <FormLabel>Manager</FormLabel>
                <Input id="antrenor" type='text' placeholder='Manager is ...' />
                <FormLabel>Country</FormLabel>
                <Input  id="tara"type='text' placeholder='Country is ...' />
                <FormLabel>Number of championships</FormLabel>
                <Input id="nrCampionate" type='text' placeholder='The number of championships is ...' />
                
            </FormControl>
            </div> 
            <Flex direction="row" justifyContent="space-between" alignItems="center">

            <Button
            mt={4}
            bg='#F56565'
            onClick={ insertRecord }
            type='submit'
            textColor='white'
          >
            Submit
          </Button>

          <Link href="/">
                <Button bg='#F56565' mt={4}  textColor='white'>
                    Back to Main Page
                </Button>
            </Link>
            </Flex>
            </div>
		</section>            
	)
}