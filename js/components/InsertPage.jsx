import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input, Button, Flex, Text, Divider
  } from '@chakra-ui/react'
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
    }

	return (
		<section>
            <Text className="w-[500px] mx-auto text-center text-6xl">Adaugare card nou</Text>
            
            <div className="container px-6 py-10 mx-auto">  
            <div> 
			<FormControl isRequired >
                <FormLabel >Nume Echipa</FormLabel>
                <Input  id="numeEchipa" type='tel' placeholder='Aici trebuie introdus numele echipei' />
                <FormLabel>Antrenor</FormLabel>
                <Input id="antrenor" type='text' placeholder='Aici trebuie introdus numele antrenorului' />
                <FormLabel>Tara de provenienta</FormLabel>
                <Input  id="tara"type='text' placeholder='Aici trebuie introdusa tara de provenienta a echipei' />
                <FormLabel>Numar campionate nationale castigate</FormLabel>
                <Input id="nrCampionate" type='text' placeholder='Aici trebuie introdus numarul de campionate nationale castigate' />
                
            </FormControl>
            </div> 
            <Flex direction="row" justifyContent="space-between" alignItems="center">

            <Button
            mt={4}
            colorScheme='teal'
            onClick={ insertRecord }
            type='submit'
          >
            Submit
          </Button>

          <Link href="/">
                <Button colorScheme='red' mt={4}>
                    Inapoi la pagina principala
                </Button>
            </Link>
            </Flex>
            </div>
		</section>            
	)
}