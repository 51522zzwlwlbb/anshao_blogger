import yayJpg from '../assets/yay.jpg';
import axios from 'axios';

export default function HomePage() {
  axios.get('/api/todos/1');

  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
