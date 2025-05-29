"use client"
import { SearchIcon, UserAiIcon } from "@hugeicons/core-free-icons/index"
import { HugeiconsIcon } from "@hugeicons/react"
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Container, Grid, IconButton, Link, Skeleton, Stack, Toolbar, Typography, useMediaQuery } from "@mui/material"
import Image from "next/image"
import Ribbot from "src/assets/ribbot.png"
import Logo from "src/assets/logo.png"
import { useTheme } from "@mui/material/styles"
import { useMemo, useEffect } from "react"

const ITEMS = "Ea tempor tempor Lorem officia officia dolor. Elit aliquip mollit labore officia elit cupidatat Lorem voluptate officia ipsum. Excepteur cillum ea elit eiusmod pariatur laboris. Anim nisi cupidatat qui occaecat veniam irure. Velit laboris fugiat sit est eu excepteur esse ipsum. Do incididunt fugiat veniam sint labore esse pariatur eiusmod et nulla. Ea aliquip quis sit et exercitation ut sunt aute veniam ex nisi culpa. Qui et do dolore amet. Id ea sit pariatur quis id minim. Lorem est proident dolor veniam. Reprehenderit tempor in id mollit amet culpa. Anim excepteur quis consectetur fugiat aute aliqua irure magna eiusmod do exercitation. Culpa eiusmod officia aliqua eiusmod culpa consequat commodo fugiat elit proident id anim ex. Non officia exercitation consequat velit eiusmod magna esse laboris ullamco consequat consequat est culpa pariatur. Aute adipisicing commodo qui culpa enim nostrud anim laborum ipsum ea in enim aute excepteur. Occaecat eu voluptate non quis. Lorem ea eiusmod id sint eu excepteur. Ullamco ad esse aliquip ut sint aliquip incididunt laborum id in qui nulla ut. Magna duis incididunt exercitation pariatur aliquip in aliquip. Velit et aliqua cupidatat Lorem ullamco Lorem ut excepteur proident duis adipisicing dolor veniam. Ipsum magna consectetur ullamco cillum sit consequat dolor. Consequat non occaecat voluptate commodo proident et deserunt duis elit laborum. Esse ad elit enim ea Lorem. Ex ullamco amet exercitation tempor culpa elit et laboris. Ut eu et exercitation incididunt occaecat sunt eu ut commodo dolore anim. Occaecat elit ullamco minim officia fugiat cillum in ea. Velit ad dolore qui id deserunt voluptate exercitation Lorem voluptate incididunt ex occaecat magna. Ullamco elit occaecat eu qui ullamco. Nulla laboris pariatur officia mollit ut ipsum do laborum eiusmod officia mollit aute quis.".split(". ")
const bgColors = ["cream.main", null, "sand.main", "pink.main"]

const Main = ({ children, bgcolor, ...props }) => (
  <Box py={3} bgcolor={bgcolor}>
    <Container maxWidth="md" {...props}>
      {children}
    </Container>
  </Box>
)

export default function Home() {
  const theme = useTheme()
  const belowMd = useMediaQuery(theme.breakpoints.down("md"))
  const isMd = useMediaQuery(theme.breakpoints.only("md"))
  const upLg = useMediaQuery(theme.breakpoints.up("lg"))

  const rowSize = useMemo(() => (belowMd ? 2 : isMd ? 3 : upLg ? 4 : 1), [belowMd, isMd, upLg])

  useEffect(() => {
    console.log("rowSize changed:", rowSize)
  }, [rowSize])
  return (
    <>
      <Toolbar variant="mini" sx={{ backgroundColor: "grey.200" }} disableGutters>
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            alignItems: "center",
            py: 0.5,
            fontSize: "caption.fontSize",
          }}
        >
          <Link href="https://ribblr.com/makes/kkontagion?" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Image src={Ribbot} alt="Ribblr Logo" style={{ height: "1.2em", width: "auto" }} />
            Ribblr
          </Link>

          <IconButton aria-label="Search" size="small" sx={{ ml: "auto" }}>
            <HugeiconsIcon icon={SearchIcon} size={theme.typography.body2.fontSize} />
          </IconButton>
          <IconButton aria-label="User" size="small">
            <HugeiconsIcon icon={UserAiIcon} size={theme.typography.body2.fontSize} />
          </IconButton>
        </Container>
      </Toolbar>

      <Stack>
        <Main bgcolor="pink.main">
          <Stack alignItems="center">
            <Typography variant="h1" my={4}>
              <svg width="100%" height="100%" viewBox="0 0 500 375">
                <path id="convex" d="M 50 155 Q 250 -45 450 155" fill="transparent" />
                <text width="100%" textAnchor="middle">
                  <textPath href="#convex" startOffset="50%">
                    kkonstruct kraft
                  </textPath>
                </text>
                <foreignObject x="calc(50% - 100px)" y="calc(50% - 99px)" width={200} height={200}>
                  <div xmlns="http://www.w3.org/1999/xhtml">
                    <Image src={Logo} alt="Logo" height={200} />
                  </div>
                </foreignObject>
                <path id="concave" d="M 50 250 Q 250 450 450 250" fill="transparent" />
                <text
                  width="100%"
                  textAnchor="middle"
                  style={{
                    fontSize: theme.typography.subtitle1.fontSize,
                    letterSpacing: theme.typography.subtitle1.letterSpacing,
                    textTransform: theme.typography.subtitle1.textTransform,
                  }}
                >
                  <textPath href="#concave" startOffset="50%">
                    Home of badly made toys
                  </textPath>
                </text>
              </svg>
            </Typography>
          </Stack>
        </Main>

        {Array.from({ length: Math.ceil(ITEMS.length / rowSize) }, (_, i) => (
          <Main key={i} bgcolor={bgColors[i % bgColors.length]} maxWidth="lg">
            <Grid container spacing={3} my={0.5} mx={{ sm: 2, lg: 0 }}>
              {ITEMS.slice(i * rowSize, (i + 1) * rowSize).map((content, j) => (
                <Grid key={j} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                  <Card elevation={0} sx={{ p: 0.75, display: "flex", flexDirection: "column", height: "100%", alignItems: "stretch", textAlign: "left" }}>
                    <CardMedia
                      component={Skeleton}
                      variant="rounded"
                      width="100%"
                      height={200}
                      sx={{
                        borderRadius: 3.25,
                        borderBottomLeftRadius: 1.5,
                        borderBottomRightRadius: 1.5,
                        mb: 1,
                      }}
                    />
                    <CardHeader title={`Item ${i * rowSize + j + 1}`} sx={{ px: 1, pt: 0, pb: 0.5 }} />
                    <CardContent sx={{ py: 0, px: 1, flexGrow: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        {content}.
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "space-between", alignItems: "center" }}>
                      <Typography variant="h6" color="primary.main" fontWeight="bold">
                        S${content.length}
                      </Typography>
                      <Button variant="outlined" color="secondary">
                        Buy
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Main>
        ))}
      </Stack>
    </>
  )
}
