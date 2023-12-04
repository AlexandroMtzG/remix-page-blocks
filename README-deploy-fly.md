# Deploy to Fly.io

1. Set the app `name` and `primary region` at fly.toml.

```
app = "YOUR_APP_NAME"
...
primary_region = "iad"
```

The primary region should match your database (e.g. Supabase) region.

2. Create the app using `fly` CLI:

```
fly apps create YOUR_APP_NAME
```

3. Set your secrets:

You can see the examples at `.env.fly.example`.

```
flyctl secrets set \
SERVER_URL=https://YOUR_APP_NAME.fly.dev \
SESSION_SECRET=abc123 \
APP_NAME="Remix Page Blocks" \
CONVERTKIT_APIKEY=abc123 \
CONVERTKIT_FORM=abc123 \
GITHUB_TOKEN=abc123 \
CONTACT_FORMSPREE=abc123 \
--app YOUR_APP_NAME
```

4. Deploy the app:

```
fly deploy --remote-only
```

5. Optional: Scale

```
fly scale vm shared-cpu-2x --app YOUR_APP_NAME
```
