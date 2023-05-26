import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';


const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <h1>I am Kushal Majiwala...And this is my portfolio Website...</h1>
      <div>
            <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="My Info" visible={visible} draggable={false} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <p className="m-0">
                    I am Kushal Majiwala and I am an IT Student
                </p>
            </Dialog>
        </div>
    </>
  )
}

export default App;