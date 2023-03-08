import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { demoProfilePicture } from "../utils/constans";

const ChannelCard = (channelDetail, marginTop) => {
  return (
    <Box  sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop,}}>
      <Link to={`/channel/${channelDetail?.id?.channelID}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "white",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumpnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{borderRadius: '50%', height : '180px', width: '180px', mb: 2, border: '1px solid grey'}}
          />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize: 12, color: 'grey', ml: '5'}}/>
          </Typography>
          {channelDetail?.statistics?.subscribercount && (
          <Typography>
            {parseInt(channelDetail?.statistics?.subscribercount).tolocalestring('en-US')} subscribers
          </Typography>)
          }
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
