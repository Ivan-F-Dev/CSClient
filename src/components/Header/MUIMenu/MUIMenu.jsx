import React from "react";
import s from "./MUIMenu.module.scss"
//import Button from "@material-ui/core/Button";
//import MenuItem from "@material-ui/core/MenuItem";
//import Menu from "@material-ui/core/Menu";
//import MenuIcon from '@material-ui/icons/Menu';
//import makeStyles from "@material-ui/core/styles/makeStyles";

const MUIMenu = () => {

    //const useStyles = makeStyles({root: {color: 'white', textTransform: 'none', fontSize: '18px'},});
    // const classes = useStyles()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={s.container} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            Menu
            {/*<Button*/}
            {/*    id="basic-button"*/}
            {/*    aria-controls={open ? 'basic-menu' : undefined}*/}
            {/*    aria-haspopup="true"*/}
            {/*    aria-expanded={open ? 'true' : undefined}*/}
            {/*    onClick={handleClick}*/}
            {/*    color="primary"*/}
            {/*    variant="contained"*/}
            {/*>*/}
            {/*    <MenuIcon/>Каталог*/}
            {/*</Button>*/}
            {/*<Menu*/}
            {/*    id="basic-menu"*/}
            {/*    anchorEl={anchorEl}*/}
            {/*    open={open}*/}
            {/*    onClose={handleClose}*/}
            {/*    MenuListProps={{*/}
            {/*        'aria-labelledby': 'basic-button',*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <MenuItem onClick={handleClose}>Profile</MenuItem>*/}
            {/*    <MenuItem onClick={handleClose}>My account</MenuItem>*/}
            {/*    <MenuItem onClick={handleClose}>Logout</MenuItem>*/}
            {/*</Menu>*/}
        </div>
    );
}

export default MUIMenu;