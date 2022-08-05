import React from 'react';

import { ModalBasic } from 'components/Modals';
import { Button } from 'components';

import "./WarehouseTable.css"

import TableCalendar from '../TableCalendar/TableCalendar';

import plusIcon from "../../../../assets/images/plus-icon.svg"
import Shape from "../../../../assets/images/Shape.svg"
import WarehouseModal from 'components/Modals/WarehouseModal';

const WarehouseTable: any = () => {
  const [filterCreateModalOpen, setFilterCreateModalOpen] = React.useState<boolean>(true);
  const [filterNameValue, setFilterNameValue] = React.useState<string>("");

  const createModalOpenHanlder = (e: React.MouseEvent) => {
    setFilterCreateModalOpen(true);
  }


  return (
    <div className='p-4 md:p-5 text-center'>
      <Button clickHandler={createModalOpenHanlder} appearance="primary" customClassName="button-add"> Добавить склад</Button>
      <WarehouseModal
        title="Новый склад"
        id="save-filter-modal"
        modalOpen={filterCreateModalOpen}
        setModalOpen={setFilterCreateModalOpen}
        customSize="warehouse-modal"
      >
        <div className="max-w-md my-0 mx-auto px-4 py-4">
          <div className="mb-4">
            <label className="block text-sm text-gray-600 text-left font-medium mb-1" htmlFor="filter">Название склада<span className="text-red-500">*</span></label>
            <input
              placeholder="Основной склад"
              id="filter"
              value={filterNameValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterNameValue((e as any).target.value)}
              className={`form-input  w-full px-2 py-1`}
              type="text"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-600 text-left font-medium mb-1" htmlFor="filter">Адрес склада<span className="text-red-500">*</span></label>
            <input
              placeholder="Город, улица, номер здания"
              id="filter"
              value={filterNameValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterNameValue((e as any).target.value)}
              className={`form-input  w-full px-2 py-1`}
              type="text"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-600 text-left font-medium mb-1" htmlFor="filter">Тип склада<span className="text-red-500">*</span></label>
            <div className='block text-sm text-gray-600 text-left font-medium mb-1 type-warehouse'>
              <div className='block text-sm text-gray-600 text-left font-medium mb-1 type-warehouse'>
                <input
                  id="filter"
                  type="radio"
                  required
                />
                <div>Мой</div>
              </div>
              <div>Или</div>
              <div className='block text-sm text-gray-600 text-left font-medium mb-1 type-warehouse'>
                <input
                  id="filter"
                  type="radio"
                  required
                />
                <div>поставщик</div>
              </div>
            </div>
          </div>
          <div>
            <div className='block text-w-sm text-gray-600 text-left font-medium mb-1 contacts'>
              <div className='contacts-h1'>Контакты</div>
              <button><img src={plusIcon}></img></button>
            </div>
            <div className='contact-list'>
              <button className='contact-person contact-person-focus'>Иван Б.</button>
              <button className='contact-person'>Контакт 2</button>
              <button className='contact-person'>Контакт 3</button>
            </div>
            <div className='delete-contacts'>
              <button className='Button-delete block text-sm text-gray-600 text-left font-medium mb-1'><img src={Shape}></img><div>Удалить контакт</div></button>
            </div>
            <div className='email'>
              <label className="block text-sm text-gray-600 text-left font-medium mb-1" htmlFor="filter">Email<span className="text-red-500">*</span></label>
              <input
                placeholder="example@mail.ru"
                id="filter"
                value={filterNameValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterNameValue((e as any).target.value)}
                className={`form-input  w-full px-2 py-1`}
                type="text"
                required
              />
            </div>
            <div className='phone'>
              <label className="block text-sm text-gray-600 text-left font-medium mb-1" htmlFor="filter">Телефон<span className="text-red-500">*</span></label>
              <input
                placeholder="+7 917 999 99 99"
                id="filter"
                value={filterNameValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterNameValue((e as any).target.value)}
                className={`form-input  w-full px-2 py-1`}
                type="text"
                required
              />
            </div>
          </div>
          <TableCalendar></TableCalendar>
        </div>
      </WarehouseModal>
    </div>
  );
};

export default WarehouseTable;
