import { StyleSheet } from "react-native";


let gap = '0.5rem';
let borderRadius = '0.3rem';
const flexStyles = StyleSheet.create({
    flexfill: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 'auto'
    },
    row: {
        flexDirection: 'row', 
        gap: gap
    },
    column: {
        flexDirection: 'column', 
        gap: gap
    },
    center: {
        alignItems: 'center'
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    centerSpaceBetween: {
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

const textBoxStyles = StyleSheet.create({
    textArea: {
        border: 'unset',
        borderRadius: borderRadius,
        resize: 'none'
    },
    searchBar: {
        paddingTop: gap,
        paddingBottom: gap,
        paddingRight: '2rem',
        paddingLeft: gap
    }
})


export { flexStyles, textBoxStyles };