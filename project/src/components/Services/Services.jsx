import React from 'react'
import "./services.css";

export default function Services() {
  return (
    <div className="services">
      <form>
        <div className="heading">ОСТАВЬТЕ ЗАЯВКУ НА УСЛУГУ</div>
        <div className="">
          <label htmlFor="serviceTitle" className="form-label">НАЗВАНИЕ УСЛУГИ</label>
          <input type="text" name="serviceTitle" id="serviceTitle"
            className="form-input" required="required" />
        </div>
        <div className="category-price-currency-container">
          <div>
            <label htmlFor="serviceCategory" className="form-label">КАТЕГОРИЯ</label>
            <select className="select-category" name="serviceCategory" id="serviceCategory">
              <option value="walk">ВЫГУЛ</option>
              <option value="grooming">ГРУМИНГ</option>
              <option value="veterinary">ВЕТЕРИНАРИЯ</option>
              <option value="other">ДРУГОЕ</option>
            </select>
          </div>
          <div>
            <label htmlFor="servicePrice" className="form-label">СТОИМОСТЬ</label>
            <input type="number" min="0" max="10000" step="1"
              name="servicePrice" id="servicePrice"
              className="form-input" required="required" />
          </div>
          <div>
            <label htmlFor="currency" className="form-label">ВАЛЮТА</label>
            <select className="select-currency" name="select-currency" id="currency">
              <option value="ruble">&#8381;</option>
              <option value="dollar">&#36;</option>
              <option value="euro">&euro;</option>
            </select>
          </div>
        </div>
        <div className="">
          <label htmlFor="serviceTitle" className="form-label">ПОДРОБНОЕ ОПИСАНИЕ</label>
          <textarea id="serviceDescription" name="serviceDescription" className="form-textarea"
            rows="4" cols="50">
          </textarea>
        </div>
        <div className="btn-submit-container">
          <button type="submit" className="btn-submit">СОЗДАТЬ</button>
        </div>
      </form>
    </div>
  )
}

