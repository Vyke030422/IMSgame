import { Text, Grid, Center, Button, Flex, SimpleGrid, getFontSize, AspectRatio, Modal, } from "@mantine/core";
import {Admin_Modal} from "../import_bundles/_Bundles.jsx";
export default function Admin_Login() {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>

      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
        <AspectRatio ratio={16/9}>
          <Flex
            gap="md"
            justify="center"
            align="center"
            direction="column"
            bd="1px solid black"
          >
            <Text>Welcome</Text>
            
            <Admin_Modal />
          </Flex>
        </AspectRatio>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>


      </Grid.Col>

    </Grid>
  );
}