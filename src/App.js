import './App.css';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import { Card } from './Card/card';
import { CardList } from './CardList/cardList';
import { CompoundCard } from './CompoundCard/compoundCard';
import { CardButtons } from './CompoundCard/CardButtons/cardButtons';
import { CardButton } from './CompoundCard/CardButtons/CardButton/cardButton.js';
import { Sidebar } from './Sidebar/sidebar';

function App() {

  const { TabPane } = Tabs;

  return (
    <Tabs defaultActiveKey="1" className="tab_container">
      <TabPane tab="Card" key="1">
        <Card 
          title="Este es el título" 
          subtitle="Subtítulo chulo" 
        />
      </TabPane>
      <TabPane tab="Compound Card" key="2">
        <CompoundCard>
          <CardButtons>
            <CardButton name="Acción" handleAction={() => console.log('Clicado')} />
          </CardButtons>
        </CompoundCard>
      </TabPane>
      <TabPane tab="Card List" key="3">
        <h2>Simple Card List</h2>
        <div className="cardList">
          <Card 
            title="Este es el título" 
            subtitle="Subtítulo chulo" 
          /> 
          <Card 
            title="Este es el título" 
            subtitle="Subtítulo chulo" 
        /> 
        </div>
      </TabPane>
      <TabPane tab="Compound Card List" key="4">
        <CardList title="Compound Card List">
            <Card 
              title="Este es el título" 
              subtitle="Subtítulo chulo" 
            /> 
            <Card 
              title="Este es el título" 
              subtitle="Subtítulo chulo" 
            /> 
        </CardList>
      </TabPane>
      <TabPane tab="Sidebar" key="5" className="sidebar">
        <Sidebar />
      </TabPane>
    </Tabs>
  );
}

export default App;
