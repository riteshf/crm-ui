import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import img from '../../img/ico-calls.png'


const MediaCard = props => {
    const {employeeInfo} = props;
    return (
        <Card style={{marginBottom: "40px", display: 'flex'}}>
            <CardActionArea>
                <CardMedia
                    style={{height: '50px', width: '50px', margin: '30px 30px'}}
                    image={img}
                    title={employeeInfo.image}
                />
                <CardContent style={{textAlign: "right"}}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        style={{color: "#2C3E50", fontSize: "18px"}}>
                        {employeeInfo.about}
                    </Typography>
                    <Typography
                        component="p"
                        style={{color: "#2196F3", fontSize: "48px"}}>
                        {employeeInfo.current}/{employeeInfo.total}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default MediaCard;
