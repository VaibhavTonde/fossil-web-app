import React from 'react'
import styled from 'styled-components'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Container = styled.div`
`

const ProductFilter = () => {
    return (
        <Container>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Gender</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Male
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    )
}

export default ProductFilter
