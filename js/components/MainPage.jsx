// js/components/MainPage.jsx
import {useEffect, useState} from "react";
import { Button, ButtonGroup, Spacer } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, Text, Flex, Box } from '@chakra-ui/react'
import Image from "next/image"
import Link from 'next/link'
import { FaFlag, FaTrophy } from 'react-icons/fa';
import {FcManager}from 'react-icons/fc'


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

            <Text className="w-[500px] mx-auto text-center text-5xl" color='#FBD38D' mt={10} mb={5}>Details about football teams app</Text>
            <Flex justifyContent='center' alignItems='center'>
              <Box mr={4}>
                <Link href="/insert">
                  <Button colorScheme="orange" mt={5} mb={5} variant='outline'>
                    Add a new record
                  </Button>
                </Link>
              </Box>
              <Box>
                <Link href="/footballApi">
                  <Button colorScheme="orange" mt={5} mb={5} variant='outline'>
                    View teams from Premier League
                  </Button>
                </Link>
              </Box>
            </Flex>

        <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>  
        {records.map(record => (
          <Card maxW='sm' key={record.id} style={{ margin: '10px', padding: '10px', width: '100%', maxWidth: '300px', backgroundColor:"#FBD38D" }}>
            <CardBody>
                <Heading size='md' textAlign="center" marginBottom={2}>{record.numeEchipa}</Heading>
                <Flex justifyContent='center'>
                <Stack>  
                    <Flex direction="row" >
                        <Text ><FcManager /> </Text>
                        <Text >
                        {record.antrenorActual}
                        </Text>
                    </Flex>
                    <Flex direction="row"  alignItems="center">
                    <Text><FaFlag /> </Text>
                    <Text>
                        {record.tara}
                    </Text>
                    </Flex>
                    <Flex direction="row" alignItems="center">
                    <Text><FaTrophy style={{ display: 'inline-block', marginRight: '5px' }} /></Text>
                    <Text style={{ display: 'inline-block' }}>
                        {record.nrCampionate}
                    </Text>
                    </Flex>                
              </Stack>
              </Flex>
            </CardBody>
            <Divider />
            <CardFooter justifyContent='center'>
              <ButtonGroup spacing='2'>
                <Button
                  variant='solid'
                  bg='orange'
                  id={record._id}
                  onClick={deleteRecord}>
                  Delete
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </section>
      </div>
       

              
    )
}