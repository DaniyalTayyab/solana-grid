<ProfileWrapper theme={theme}>
  <Box
    style={{
      display: "grid",
      placeItems: "center",
      textAlign: "left",
      font: "normal normal bold 23px Roboto",
      letterSpacing: "0px",
      color: theme === "dark" ? "#E1C869" : "white",
      marginTop: "20px",
    }}
  >
    What do you own?
  </Box>
  <Box
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      marginTop: "15px",
    }}
  >
    {dummyArr.map((obj, index) => (
      <AddNFTCardWrpper
        key={`${index}nft`}
        style={{
          background:
            theme === "dark" ? "#0A0A0A 0% 0% no-repeat padding-box" : "white",
        }}
      >
        <Box
          style={{
            width: "100%",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            marginTop: 17,
          }}
        >
          <img
            src={NFTImage}
            alt="not found"
            style={{
              // width: 254,
              // height: 190,
              width: 200,
              height: 190,
            }}
          />
        </Box>
        {/* new size and id */}
        <Box
          style={{
            color: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            font: "normal normal normal 12px Poppins",
            fontSize: "14px",
          }}
        >
          <Typography
            style={{
              textAlign: "left",
              letterSpacing: "0px",
              // font: "normal normal normal 17px/32px Poppins",
              color: theme === "dark" ? "#B4951D" : "#6C26B1",
              opacity: 1,
            }}
          >
            Size: 16x16
          </Typography>
          <Typography
            style={{
              textAlign: "left",
              letterSpacing: "0px",
              // font: "normal normal normal 17px/32px Poppins",
              color: theme === "dark" ? "#B4951D" : "#6C26B1",
              opacity: 1,
            }}
          >
            ID: 152236
          </Typography>
        </Box>
        {/* new size and id */}

        {/* new other stuff */}
        <Box
          style={{
            // width: "100%",
            display: "flex",
            flexDirection: "column",
            marginLeft: 28,
            marginTop: 10,
            color: theme === "dark" ? "white" : "black",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              style={{
                minWidth: 70,
                maxWidth: 70,
                font: "normal normal normal 12px/20px Poppins",
                letterSpacing: "0px",
                color: theme === "dark" ? "white" : "black",
                fontWeight: "400",
              }}
            >
              Name:
            </Typography>
            <Typography
              style={{
                textAlign: "left",
                font: "normal normal normal 10px/14px Poppins",
                letterSpacing: "0px",
                color: theme === "dark" ? "white" : "black",
                opacity: 0.5,
                fontSize: "12px",
              }}
            >
              Lorem Ipsum
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography
              style={{
                minWidth: 70,
                maxWidth: 70,
                font: "normal normal normal 12px/20px Poppins",
                letterSpacing: "0px",
                color: theme === "dark" ? "white" : "black",
              }}
            >
              Bio:
            </Typography>
            <Typography
              style={{
                width: "250px",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textAlign: "left",
                font: "normal normal normal 10px/14px Poppins",
                letterSpacing: "0px",
                color: theme === "dark" ? "white" : "black",
                opacity: 0.5,
                fontSize: "12px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Typography>
          </Box>
        </Box>
        {/* new other stuff */}
      </AddNFTCardWrpper>
    ))}
    {/* ADD NFT box */}
    <AddNFTBox onClick={() => toggleCreateNFTModal()} theme={theme}>
      {theme === "dark" ? <AddNFTIcon /> : <AddNFTIconLight />}
    </AddNFTBox>
    {/* ADD NFT box */}
  </Box>
  {/* social icons */}
  <SocialWrapper>
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        width: "350px",
        justifyContent: "space-evenly",
        marginTop: "20px",
      }}
    >
      {theme === "dark" ? (
        <>
          <TwitterGoldIcon />
          <InstagramIcon />
          <DiscordGoldIcon />
        </>
      ) : (
        <>
          <TwitterIconLight />
          <InstagramIconLight />
          <DiscordLight />
        </>
      )}
    </Box>
    <EditSocialBtn
      style={{
        background:
          theme === "dark"
            ? "transparent linear-gradient(107deg, #D3B651 0%, #F3DF8E 55%, #C77131 100%) 0% 0% no-repeat padding-box"
            : "#6C26B1 0% 0% no-repeat padding-box",

        color: theme === "dark" ? "black" : "white",
      }}
      onClick={toggleEditSocialModal}
    >
      Edit Socials
    </EditSocialBtn>
  </SocialWrapper>
  {/* social icons */}
  <GoldDivider theme={theme} />
</ProfileWrapper>;
