const selectdate = async (page, dateInputSelector, date) => {
    try {
      await page.click(dateInputSelector);
      console.log('Date Picker Opened');
      console.log(`Date Selector: ${dateInputSelector}, Date: ${date}`);
  
      const months = [
        'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 
        'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
      ];
  
      const monthYearSelector = 'button[aria-label="Choose month and year"] > span.mdc-button__label > span';
      await page.waitForSelector(monthYearSelector, { visible: true });
  
      const [currentMonth, currentYear] = await page.evaluate((selector) => {
        const currentYearMonthElement = document.querySelector(selector);
        return currentYearMonthElement.innerText.split(' ');
      }, monthYearSelector);
  
      const [day, month, year] = date.split('/');
      const monthIndex = months.indexOf(currentMonth) + 1;
  
      if (currentYear !== year || monthIndex.toString().padStart(2, '0') !== month) {
        console.log('Month or year mismatch. Adjusting calendar...');
        
        await page.click(monthYearSelector);
  
        const yearSelector = `button[aria-label="${year}"]`;
        await page.waitForSelector(yearSelector, { visible: true });
        await page.click(yearSelector);
  
        const monthSelector = `button[aria-label="${months[parseInt(month, 10) - 1]} ${year}"]`;
        await page.waitForSelector(monthSelector, { visible: true });
        await page.click(monthSelector);
      }
  
      const dateSelector = `button[aria-label="${date}"]`;
      await page.waitForSelector(dateSelector, { visible: true });
      await page.click(dateSelector);
      console.log(`Date selected: ${date}`);
      return `Successfully selected date: ${date}`;
    } catch (err) {
      console.error('Error selecting date:', err);
      throw err;
    }
  };
  
  export default selectdate;
  