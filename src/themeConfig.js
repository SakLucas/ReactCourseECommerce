import {createMuiTheme} from '@material-ui/core/styles'
import Teal from '@material-ui/core/colors/teal'
import Amber from '@material-ui/core/colors/amber'

const theme = createMuiTheme({
    palette:{
        primary:Teal,
        secondary:Amber
    }
})
export default theme;