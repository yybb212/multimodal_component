//import logo from './logo.svg';
import { Grid } from '@mui/material';
import './App.css';
import Popup from './component/Popup';
import CustomTable from './component/Table';
import HtmlList from './component/HtmlList';
import URLLink from './component/URLLink';
import CustomLine from './component/Line';
import CustomButton from './component/CustomButton';
import DatePicker from './component/DatePicker';
import TimePicker from './component/TimePicker';

function App() {
  //Table 테스트 데이터
  const tableData = [
    'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry',
    'Fig', 'Grape', 'Honeydew', 'Jujube', 'Kiwi',
    'Lemon', 'Mango', 'Nectarine', 'Orange', 'Peach',
    'Quince', 'Raspberry', 'Strawberry', 'Tangerine', 'Ugli fruit'
  ];

  //리스트 테스트 데이터
  const ulData = ["item 1", "item 2", "item 3"];
  const olData = ["item 1", "item 2", "item 3"];
  const dlData = [
    { term: "term 1", description: "description 1" },
    { term: "term 2", description: "description 2" },
    { term: "term 3", description: "description 3" },
  ];  
  
  const testCallback = () => {
    console.log("TEST CALL BACK");
  }

  return (
    <div className="App">
      <Grid container justifyContent="flex-start" spacing={2} sx={{ marginTop: '12px', marginLeft: '12px', marginRight: '12px', marginBottom: '12px'}}>
        <h4>JUST POP UP</h4>
        <Grid item xs={12} md={12}>
          <Popup title='POPUP NO HTML' />
        </Grid>  
        <h4>POP UP WITH HTML</h4>
        <Grid item xs={12} md={12}>
          <Popup title='POPUP WITH HTML' isHtml='example.html' />
        </Grid>
        <Grid item xs={12} md={12}>
          <CustomTable title='CUSTOM TABLE' data={tableData} rowNum='4' colNum='5' />
        </Grid>
        <h4>HTML UL List</h4>
        <Grid item xs={12} md={12}>
          <HtmlList type="ul" data={ulData} />
        </Grid>
        <h4>HTML OL List</h4>
        <Grid item xs={12} md={12}>
          <HtmlList type="ol" data={olData} />
        </Grid>
        <h4>HTML DL List</h4>
        <Grid item xs={12} md={12}>
          <HtmlList type="dl" data={dlData} />
        </Grid>
        <h4>URL Link</h4>
        <Grid item xs={12} md={12}>
          <Grid container justifyContent="flex-start">
            <URLLink title='네이버로 이동합니다' url='https://www.naver.com' fontSize='20px' color="green" />
          </Grid>
        </Grid>
        <h4>Divider (Line)</h4>
        <Grid item xs={12} md={12}>
          <CustomLine type="dashed" color="primary" />
        </Grid>
        <Grid item xs={12} md={12}>
          <CustomLine type="solid" color="red" />
        </Grid>
        <Grid item xs={12} md={12}>
          <CustomLine type="dotted" color="red" />
        </Grid>
        <Grid item xs={12} md={12}>
          <CustomLine type="double" color="red" />
        </Grid>
        <h4>Button ICON</h4>
        <Grid item xs={12} md={12}>
            <CustomButton type="Submit" iconName="Submit" size="medium" color="primary" text="Submit" img="" alt="" iconLocation="RIGHT" callback={testCallback} width="200px" height="100px" />
            <CustomButton type="Close" iconName="Close" size="large" color="secondary" text="Close" img="" alt="" iconLocation="LEFT" callback={testCallback}/>
            <CustomButton type="Move" iconName="Move" size="small" color="error" text="Move" img="" alt="" iconLocation="RIGHT" callback={testCallback}/>
            <CustomButton type="CallEnd" iconName="CallEnd" size="medium" color="warning" text="Call End" img="" alt="" iconLocation="RIGHT" callback={testCallback}/>
            <CustomButton type="Phone" iconName="Phone" size="medium" color="info" text="Connect Agent" img="" alt="" iconLocation="LEFT" callback={testCallback}/>
            <CustomButton type="Link" iconName="Link" size="medium" color="success" text="Link" img="" alt="" iconLocation="RIGHT" callback={testCallback} width="100px" height="100px" />
        </Grid>
        <h4>Button IMAGE</h4>
        <Grid item xs={12} md={12}>
            <CustomButton type="Submit" iconName="" size="small" color="primary" text="Submit" img="korea.png" alt="KOREA" width="30px" height="20px" callback={testCallback}/>
        </Grid>
        <h4>Date Picker</h4>
        <Grid item xs={12} md={12}>
            <DatePicker title="날짜 테스트" width="100px" />
        </Grid>
        <h4>Time Picker</h4>
        <Grid item xs={12} md={12}>
            <TimePicker title="시간 테스트" width="100px" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
