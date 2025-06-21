# News Feed App

A modern React app for browsing news articles by category, search, and pagination.

## 🚀 Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/news-feed-app.git
   cd news-feed-app
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add your News API key:
     ```
     VITE_NEWS_API_KEY=your_api_key_here
     ```

4. **Run the app:**
   ```sh
   npm run dev
   ```

## 🛠 Usage

- Browse news by category using the sidebar.
- Search for articles using the search bar.
- Use pagination controls to navigate between pages.

## ⚙️ Environment Variables

| Variable              | Description           |
|-----------------------|----------------------|
| VITE_NEWS_API_KEY     | Your News API key    |

## 📦 API

- Uses [NewsAPI.org](https://newsapi.org/) for fetching news articles.
- Main endpoints:
  - `/v2/top-headlines`

## 🤝 Contributing

Pull requests are welcome!