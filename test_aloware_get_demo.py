from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

BASE_URL = "https://aloware.com/"
DEMO_URL = "https://aloware.com/get-demo"

driver = webdriver.Chrome()
wait = WebDriverWait(driver, 15)

try:
    driver.set_window_size(1440, 900)
    driver.get(BASE_URL)

    # Click hero CTA: "Get a demo"
    get_demo = wait.until(EC.element_to_be_clickable((By.LINK_TEXT, "Get a demo")))
    get_demo.click()

    # Assert navigation
    wait.until(EC.url_to_be(DEMO_URL))

    # Assert H1 present
    h1 = wait.until(EC.visibility_of_element_located((By.XPATH, "//h1[normalize-space()='Request a demo']")))
    assert h1.is_displayed()

    print("PASS: ALW-LP-002")
finally:
    driver.quit()