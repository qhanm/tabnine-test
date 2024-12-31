import axios from "axios";

interface PriceData {
  symbol: string;
  price: string;
}

async function getExchangeRate(): Promise<number> {
  try {
    const response = await axios.get(
      "https://api.binance.com/api/v3/ticker/price",
      {
        params: {
          symbol: "ETHBTC", // Replace with the desired symbol
        },
      }
    );

    const ethPrice: number = parseFloat(response.data.price);

    return ethPrice;
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    throw error;
  }
}

(async () => {
  try {
    const ethPrice = await getExchangeRate();
    console.log(`Exchange rate (ETH/BTC): ${ethPrice}`);
  } catch (error) {
    console.error("Error:", error);
  }
})();
