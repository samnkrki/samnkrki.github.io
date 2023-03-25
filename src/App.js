import logo from './logo.svg';
import './App.css';
import { AddJournalPage } from './pages/addJournal';
import { JournalListPage } from './pages/listJournal';
import { useEffect, useState } from 'react';
import { PaginationField } from './components/pagination';
import journalService from './services/journal.service';
import { TableField } from './components/table';

const initListState = {
  data: [],
  totalPages: 0,
  currentPage: 1,
  totalData: 0,
  limit: 5
}
function App() {
  const [listData, setListData] = useState(initListState);

  const onPrevClick = () => {
    setJournalData(listData.limit, listData.currentPage - 1);
  }

  const onNextClick = () => {
    setJournalData(listData.limit, listData.currentPage + 1);
  }

  const onSearchChange = (e) => {
    console.log(e.target.value);
    setJournalData(listData.limit, listData.currentPage, e.target.value);
  }

  const setJournalData = async (limit, page, search) => {
    try {
      const resp = await journalService.listJournal({ limit, page, ...(search && { search }) });
      setListData(resp);
    } catch (error) {
      setListData(initListState);
    }
  }

  const addJournalSuccess = () => {
    setJournalData(listData.limit, listData.currentPage);
  }

  useEffect(() => {
    setJournalData(listData.limit, listData.currentPage);
  }, [])

  return (
    <div className="App">
      <h5>Add new Journal Here</h5>
      <AddJournalPage onSuccess={addJournalSuccess} />
      <h5>List of the Journals Present</h5>
      <PaginationField currentPage={listData.currentPage}
        totalPages={listData.totalPages}
        perPage={listData.limit}
        prevClick={listData.currentPage > 1 ? onPrevClick : null}
        nextClick={listData.currentPage < listData.totalPages ? onNextClick : null} />
      <JournalListPage datasource={listData.data} onSearchChange={onSearchChange} />
    </div>
  );
}

export default App;
