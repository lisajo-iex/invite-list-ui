import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 1000,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films =
[
	'Abel Noser, LLC',
	'ACS Execution Services, LLC (Global Liquidity Partners)',
	'Allen & Company LLC',
	'Auerbach Grayson & Company LLC',
	'Avatar Securities, LLC',
	'B. Riley Wealth Management',
	'Barclays Capital Inc.',
	'BB&T Securities, LLC',
	'Berenberg Capital Markets, LLC',
	'BMO Capital Markets Corp.',
	'BNP Paribas Securities Corp.',
	'Bradesco Securities, Inc.',
	'Brean Capital, LLC',
	'BTG Pactual US Capital, LLC',
	'Canaccord Genuity LLC',
	'Cantor Fitzgerald & Co.',
	'Capital Institutional Services, Inc.',
	'China Renaissance Securities (US) Inc.',
	'CIBC World Markets Corp.',
	'Citigroup Global Markets Inc.',
	'CLSA Americas, LLC',
	'Cowen and Company, LLC',
	'Credit Agricole Securities (USA) Inc.',
	'Credit Suisse Securities USA',
	'D.A. Davidson & Co.',
	'Daiwa Capital Markets America Inc.',
	'DASH Financial LLC',
	'Decker & Co, LLC',
	'Deutsche Bank Securities Inc.',
	'Drexel Hamilton, LLC',
	'Edelweiss Financial Services Inc.',
	'Evercore ISI',
	'Exane, Inc.',
	'FBN Securities, Inc.',
	'Goldman, Sachs and Company',
	'Guggenheim Securities, LLC',
	'Haitong International Securities (USA)Inc.',
	'Height Securities, LLC',
	'HSBC Securities (USA) Inc.',
	'ICAP Securities USA LLC',
	'Imperial Capital, LLC',
	'Instinet, LLC',
	'Interactive Brokers, LLC', 
	'Itau BBA USA Securities, Inc.',
	'ITG Inc.',
	'J.P. Morgan Securities LLC',
	'Janney Montgomery Scott LLC',
	'Jefferies LLC',
	'JMP Securities LLC', 
	'JNK Securities Corp.',
	'JonesTrading',
	'Keefe Bruyette and Woods, Inc.',
	'Kepler Capital Markets, Inc.',
	'KeyBanc Capital Markets Inc.',
	'Leerink Partners LLC',
	'Liquidnet, Inc.',
	'Longbow Securities',
	'LOOP Capital Markets LLC',
	'Macquarie Capital (USA) Inc.',
	'Maxim Group LLC',
	'Maybank Kim Eng Securities USA Inc.',
	'Merrill Lynch, Pierce, Fenner & Smith Inc.',
	'Mischler Financial Group, Inc.',
	'Mizuho Securities USA LLC',
	'MKM Partners LLC',
	'Monness, Crespi, Hardt & Co., Inc.',
	'Morgan Stanley & Co., LLC',
	'National Alliance Securities, LLC.',
	'National Financial Services LLC',
	'Needham & Company, LLC',
	'Northcoast Research Partners, LLC',
	'Northland Securities, Inc.',
	'Numis Securities, Inc.',
	'Oddo BHF New York Corporation',
	'Odeon Capital Group LLC',
	'Oppenheimer & Co. Inc',
	'Piper Jaffray & Co.   ',
	'Raymond James (USA) Ltd',
	'RBC Capital Markets LLC',
	'Redburn (USA) LLC',
	'Robert W. Baird & Co. Inc.',
	'Rodman & Renshaw LLC ',
	'Russell Investments Implementation Services, LLC',
	'Sanford C. Bernstein & Co., LLC',
	'Santander Securities LLCScotia Capital (USA) Inc.',
	'SG Americas Securities, LLC (Societe Generale)',
	'Sidoti & Company, LLC',
	'State Street Global Markets, LLC',
	'Stephens',
	'Stifel, Nicolaus & Company, Incorporated',
	'Strategas Securities, LLC',
	'Stuart Frankel & Co., Incorporated',
	'Suntrust Robinson Humphrey, Inc.',
	'Susquehanna Securities',
	'TD Securities USA LLC ',
	'The Benchmark Company, LLC',
	'The Buckingham Research Group Incorporated',
	'Themis Trading LLC',
	'Tourmaline Partners LLC',
	'Two Sigma Securities, LLC',
	'UBS Securities LLC',
	'Virtu Americas LLC ',
	'Wedbush Securities Inc. ',
	'Weeden &  Co.    L.P. ',
	'Wells Fargo Securities, LLC ',
	'William    Blair ',
	'Williams Trading, LLC ',
	'Wolf Trahan Securities',
	'Wunderlich Securities, Inc.',
	'Bloomberg SSEOMS',
	'Eze EMS (formerly RealTick)',
	'FIS Valdi',
	'FlexTrade Systems, Inc',
	'Lightspeed Trader',
	'Mixit Inc.',
	'OMEX Systems LLC',
	'Pico Quantitative Trading LLC',
	'Pragma Securities LLC',
	'Raptor Trading Systems',
	'SS&C MarketTrader',
	'Takion Technologies',
	'TRAFiX'
	]


export default function Tags() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={top100Films}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Brokers"
            placeholder="i.e. Two Sigma"
          />
        )}
      />
     
       
      
    </div>
  );
}

