import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td, VStack, Heading, Text, Link, Button, Flex } from '@chakra-ui/react';

function FootballDataApiPage() {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get('https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League');
      setTeamData(response.data.teams);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <VStack align="center" spacing={4}>
      <Flex direction="row" justifyContent="space-between" alignItems="center" w="100%">
        <Link href="/">
          <Button colorScheme='black' variant='outline' ml={5} mt={4} textColor='black' size="sm">
          Back to Main Page
          </Button>
        </Link>
        <Flex align="center" justify="center" flex="1">
          <Heading textAlign="center" w="50%" mr='200'>
            Football Teams from Premier League
          </Heading>
        </Flex>
      </Flex>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>Team Name</Th>
            <Th>Stadium</Th>
            <Th>Year Formed</Th>
            <Th>Abbreviation</Th>
          </Tr>
        </Thead>
        <Tbody>
          {teamData.map((team) => (
            <Tr key={team.idTeam}>
              <Td>{team.strTeam}</Td>
              <Td>{team.strStadium}</Td>
              <Td>{team.intFormedYear}</Td>
              <Td>{team.strTeamShort}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </VStack>
  );
}

export default FootballDataApiPage;
