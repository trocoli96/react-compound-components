import {useState} from 'react';
import './sidebar.css';



export const Sidebar = () => {

    const [sidebarOpened, setSidebarOpened] = useState("Menu 1");

    const toggleGroup = (name) => {
        if(sidebarOpened === name) {
            setSidebarOpened(null);
        } else {
            setSidebarOpened(name)
        }
    }


    return (
        <div className="sidebar_container">
            <div className="sidebar_group">
                <div className="sidebar_group_name" onClick={() => toggleGroup('Menu 1')}>
                    <p>Menu 1</p>
                </div>
                {sidebarOpened === 'Menu 1' &&
                    <div className="sidebar_elements_container">
                        <div className="sidebar_element">
                            Element 1
                        </div>
                        <div className="sidebar_element">
                            Element 2
                        </div>
                        <div className="sidebar_element">
                            Element 3
                        </div>
                    </div>
                }
            </div>
            <div className="sidebar_group">
                <div className="sidebar_group_name" onClick={() => toggleGroup('Menu 2')}>
                    <p>Menu 2</p>
                </div>
                {sidebarOpened === 'Menu 2' &&
                    <div className="sidebar_elements_container">
                        <div className="sidebar_element">
                            Element 4
                        </div>
                        <div className="sidebar_element">
                            Element 5
                        </div>
                        <div className="sidebar_element">
                            Element 6
                        </div>
                    </div>
                }
            </div>
            <div className="sidebar_group">
                <div className="sidebar_group_name" onClick={() => toggleGroup('Menu 3')}>
                    <p>Menu 3</p>
                </div>
                {sidebarOpened === 'Menu 3' &&
                    <div className="sidebar_elements_container">
                        <div className="sidebar_element">
                            Element 7
                        </div>
                        <div className="sidebar_element">
                            Element 8
                        </div>
                        <div className="sidebar_element">
                            Element 9
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}