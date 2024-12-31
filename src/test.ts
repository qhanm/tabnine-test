import axios from "axios";

interface PriceData {
  symbol: string;
  price: string;
}

async function getCryptoPrices(): Promise<PriceData[]> {
  try {
    const response = await axios.get(
      "https://api.binance.com/api/v3/ticker/price",
      {
        params: {
          symbol: "BNBBTC,BTCUSDT", // Replace with the desired symbols (comma-separated)
        },
      }
    );

    const prices: PriceData[] = response.data.map((data: any) => ({
      symbol: data.symbol,
      price: data.price,
    }));

    return prices;
  } catch (error) {
    console.error("Error fetching crypto prices:", error);
    throw error;
  }
}

(async () => {
  try {
    const prices = await getCryptoPrices();
    console.log("Crypto Prices:", prices);
  } catch (error) {
    console.error("Error:", error);
  }
})();
