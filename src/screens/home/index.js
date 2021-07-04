import { useAppContext } from '../../providers/AppContext';
import './styles.scss';

export default function Index() {
  const { users, page, setPage } = useAppContext()

  return (
    <>
      <main className="content-container">
        <section className="card-body">
          <div className="card-content">
            {users.map((person, i) => 
              <div key={i}>
                <img src="/images/img.png" />
                <span>{person.name}</span>
              </div>
              )}
          </div>
        </section>
      </main>
    </>
  )
}