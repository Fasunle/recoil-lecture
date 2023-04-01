import { Box, Button, Center, Checkbox } from '@chakra-ui/react'
import { atom, useRecoilState, useRecoilValue } from 'recoil';

const darkModeAtom = atom( {
    key: 'darkMode',
    default: false,
} );


const CheckBox = () => {
    const [ isDarkMode, setIsDarkMode ] = useRecoilState(darkModeAtom);
    return (
        <Checkbox
            type='checkbox'
            checked={isDarkMode}
            onChange={
                ( event ) => setIsDarkMode( event.currentTarget.checked )}
        />
    )
}

const ButtonComponent = () => {
    const isDarkMode  = useRecoilValue( darkModeAtom );
    return (
        <Button sx={{ bgColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'dark' }}>Atoms!</Button>
    )
}

export const Atoms = () => (
    <Center h='100vh' flexDir={'column'}>
        <Box>
            <CheckBox />
        </Box>

        <Box>
            <ButtonComponent />
        </Box>
    </Center>
);
