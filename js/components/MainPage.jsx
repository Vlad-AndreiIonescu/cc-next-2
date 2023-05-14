// js/components/MainPage.jsx
import {useEffect, useState} from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, Text, Flex } from '@chakra-ui/react'
import Image from "next/image"
import Link from 'next/link'

export default function MainPage() {
	const [records, setRecords] = useState([]);
	
	useEffect(() => {
		try{
			fetch('/api/records', {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => setRecords(json.data));
		}
		catch (error) {
			console.log(error);
		}
	}, []);

    
    console.log(records)

    const deleteRecord = (event) => {
		event.preventDefault();
		const id = event.target.id;
		try {
			fetch(`/api/records?id=${id}`, {
				method: 'DELETE',
			})
				.then(response => response.json())
				.then(json => {
						setRecords(records.filter(record => record._id !== id));
				});
		}
		catch (error) {
			console.log(error);
		}
	}

	return (
        <div>

            <Text className="w-[500px] mx-auto text-center text-6xl">Details about football teams app</Text>
            <Flex  justifyContent='center' alignItems='center'>
                <Link href="/insert">
                    <Button colorScheme='blue' mt={5}>
                    Adaugă un nou record
                    </Button>
                </Link>
            </Flex>
        <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>  
        {records.map(record => (
          <Card maxW='sm' key={record.id} style={{ margin: '10px', padding: '10px', width: '100%', maxWidth: '300px', backgroundColor:"#a3a30a" }}>
            <CardBody>
              <Stack>
                <Heading size='md' textAlign="center">{record.numeEchipa}</Heading>
                <Flex direction="row" justifyContent="space-between" alignItems="center">
                  <Text>Antrenor: </Text>
                  <Text>
                    {record.antrenorActual}
                  </Text>
                </Flex>
                <Flex direction="row" justifyContent="space-between" alignItems="center">
                  <Text>Tara: </Text>
                  <Text>
                    {record.tara}
                  </Text>
                </Flex>
                <Flex direction="row" justifyContent="space-between" alignItems="center">
                  <Text>Nr Campionate Castigate: </Text>
                  <Text>
                    {record.nrCampionate}
                  </Text>
                </Flex>
                
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter justifyContent='center'>
              <ButtonGroup spacing='2'>
                <Button
                  variant='solid'
                  colorScheme='blackAlpha'
                  id={record._id}
                  onClick={deleteRecord}>
                  Stergere
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </section>
      </div>
       

              
    )
}