import { Center, Icon, Text } from "native-base";
import Logo from "../assets/logo.svg";
import Button from "../components/Button";
import { Fontisto } from "@expo/vector-icons";
import { useAuth } from "../hooks/useAuth";

export default function Signin() {
  const {user, signIn} = useAuth()

  return (
    <Center flex={1} bg="gray.900" p={7}>
      <Logo width={212} height={40} />
      <Button
        type="SECONDARY"
        leftIcon={
          <Icon as={Fontisto} name="google" color="white" size="md" />
        }
        title="Entrar com o Google"
        mt={12}
        onPress={signIn}     
         />
      <Text color="white" textAlign="center" mt={4}>
        Não utilizamos nenhuma informação além {"\n"} do seu e-mail para criação
        da sua conta.
      </Text>
    </Center>
  );
}


