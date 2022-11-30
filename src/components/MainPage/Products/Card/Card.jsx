import React, {useState} from "react";
import s from "./Card.module.scss";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import BarChartIcon from "@material-ui/icons/BarChart";
// import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";


const Card = ({phone}) => {

    const [activeFav, setActiveFav] = useState(false)
    const [activeChart, setActiveChart] = useState(false)

    return (
        <div key={phone.id} className={s.Card}>
            <div className={s.photo}>
                <img src={"http://localhost:3000/images/products/" + phone.img + ".png"} alt=""/>
            </div>
            <div className={s.description}>{phone.producer} {phone.name} {phone.rom}+{phone.ram}</div>
            <div className={s.price}>{phone.price} ₽</div>
            <div className={s.icons}>
                <div className={s.topIcons}>
                    {/*{phone.likePushed ? <FavoriteIcon onClick={favIcoHandler} color='primary'/> : <FavoriteBorderIcon onClick={favIcoHandler}/>}*/}
                    {/*{phone.chartPushed ? <BarChartIcon onClick={chartIcoHandler} color='primary'/> : <BarChartIcon onClick={chartIcoHandler}/>}*/}

                    {/*{activeFav ? <FavoriteIcon onClick={() => setActiveFav(!activeFav)} color='primary'/> : <FavoriteBorderIcon onClick={() => setActiveFav(!activeFav)}/>}*/}
                    {/*{activeChart ? <BarChartIcon onClick={() => setActiveChart(!activeChart)} color='primary'/> : <BarChartIcon onClick={() => setActiveChart(!activeChart)}/>}*/}
                </div>
                <div className={s.bottomIcon}>
                    {/*<ShoppingCartOutlinedIcon color='secondary'/>*/}
                </div>
            </div>
        </div>
    )}


export default Card;