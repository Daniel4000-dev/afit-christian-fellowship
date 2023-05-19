import React, { forwardRef, useEffect, useRef } from 'react';
// import { EventNote } from '@material-ui/icons';
import { Button, makeStyles, Paper, withStyles } from '@material-ui/core';
import { animations, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import { Hidden, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Container } from '@mui/system';


const useStyles = makeStyles({
  container: {
    overflowX: 'auto',
  },
    table: {
      display: 'flex',
      flex: 1,
      width: '100%',
    },
  });

function Service() {

    const {ref, inView} = useInView({
        threshold: 0.02
    });
    const animation = useAnimation();

    useEffect(() => {
            if(inView){
                animation.start({
                    x: 0,
                    transition: {
                        duration: 0.2,
                        when: "beforeChildren"
                    }
                })
            }
            if(!inView){
                animation.start({x: '-80vw'})
            }
            if(inView){
                animation.start({
                    y: 0,
                    transition: {
                        duration: 0,

                    }
                })
            }
        console.log("use effect hook, inview", inView); 
    }, [inView])
    
    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: '#12a2e1',
          color: 'white',
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);
      
      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }))(TableRow);
      
      function createData(name, service, time) {
        return { name, service, time  };
      }
      
      const rows = [
        createData('SUNDAY', 'Sunday Service', '8.00am'),
        createData('      ', 'Discipleship Class', '6.00pm'),
        createData('THURSDAY', 'Unit Meeting', '5.30pm'),
        createData('FRIDAY', 'Padre Hour', '12.45pm'),
      ];
      
      
      
         const classes = useStyles();
      
        return (
            <motion.div ref={ref}
            animate={animation} style={{paddingBottom: '20px', paddingTop: '20px',}}>
            <Container   
            sx={{width: '92vw', border: '3px solid #12a2e1', }}
            >
            <Typography 
                style={{
                    display: "flex",
                    backgroundColor: "#12a2e1",
                    justifyContent: "center"
                }}
                variant="h4" component="h2">
                Worship With Us
             </Typography>
             <TableContainer className={classes.container}>
             <Table className={classes.table} aria-label="customized table">
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell>{row.service}</StyledTableCell>
                    <StyledTableCell>{row.time}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
             </TableContainer>
          </Container>
          </motion.div>
        );
  }

export default Service