> This project has been moved from [lil-armstrong's](https://github.com/lil-armstrong/p2p-react-node-app) repository to [cointc-team](https://github.com/cointc-team/p2p-react-node-app) repository. Use the following commands to set the remote url to point to this repository.

```git
git remote set-url origin git@github.com:cointc-team/p2p-react-node-app.git
```

# **COINTC WEB APP**
**COINTC** is a cryptocurrency **Wallet, Exchange, Chat and P2P Trading** platform. It supports transactions between five (_5_) kinds of cryptocurrencies (`ETH, BTC, EOS, Ripple, Tether, XRP`).

Use the contents of the file `.env.example` to create environment variables for the project.

This project consist of two parts: `client` and `server`. Once you have cloned the project you can run 

```bash
yarn install-all
```
The above command will install all packages for both parts of the project.

## CLIENT
The frontend was scaffolded using Create-React-App template. It is built using the following web technologies:
+ [React](https://reactjs.org)
+ [TailwindCSS](https://tailwindcss.com)
+ [SASS](https://sass-lang.com)
+ [Styled components](https://styled-components.com/docs)

### HOW TO START
To run the client-side part of the project, run the following command in your terminal

```bash
yarn client-start
```
For testing

```bash
yarn client-test
```

## SERVER
The `server` uses the following web technologies at its core:
+ [Hapi](https://hapi.dev)
+ [Tatum](https://tatum.io)
+ [sequelize](https://sequelize.org)

### HOW TO START
To run the server-side part of the project add a `.env` file using the `.env.sample` file. Then run the following command in your terminal

```bash
yarn server-start
```
For testing

```bash
yarn server-test
```

## How to sync client with server in production

First of all, I will explain to you how the production server is able to serve the app publicly. As you know, from the project structure, there is a `server` and `client` folder. The `server` folder is where all the server related files reside, and the client folder is where all client-side related files reside. 

> In production, the server folder is responsible for serving the full app, whereas in development, each folder can be served independently.

In order for the server to render the client side as well as the server side, I created a folder to house the client static files. The folder is named `static`, and its contents are rendered directly through the server. 


This means that if you introduce any new route on the client side, you will need to register it on the server side. To do that you navigate to the server side relative path `./plugins/app.plugins.js`. You will see an array of paths, add the new path there.

> If you do not add a new route as stated above, in production, the server will not be able to render that route.

So the following steps are to be taken in order to successfully sync the client code to the server in production. 

> *Note* This project uses a postgresql database. So before beginning the following steps, ensure that postgresql is running in the background and that your database env configurations are correct.

1) First ensure that the production server is currently running using the following command.

  ```bash
  pm2 status
  ```

> You should see a table with a column name, `app`. Ensure that the app named `cointc_server` is **running** and is **online**.

> Once server is running, you can seed some users records into the database using the command `yarn db-seed` from the root directory
2) Once you have confirmed that the server is online, you can then navigate to the `client` folder  on your local machine and run the following command to build the client static files.

  ```bash
  yarn build
  ```

3) The command from **step 2**, will create a build folder in the client folder. This build folder contains all the static builds for the react app.
Next, copy the contents of the folder `/client/build` to the production server’s `/server/views` folder *(Create if it doesn’t exist)*, using an FTP client.

4) After you have completed **step 3**,  check that the server is still running on the production server using the following command
  
  ```bash
  pm2 status && pm2 logs
  ```

  If the server is still running and has not encountered any errors, you should see the text on the terminal `Server running on <PORT>`. (__PORT__ is a placeholder, depending on which port was configured). Then you're done.

**NOTE**

> I wrote a script to take care of all of these worries, but unfortunately, the production server crashes at **step 2**. So instead I do the client side building on my local machine and then copy the contents of the `build` folder to the server `views` folder in the production server. 
> 
In case you want to use this script, navigate to the `root` of the project and run the following command.

```bash
yarn client-build
```

# Important links and commands
> ### Sync local content to remote SSH \
rsync -rlptzv --progress --delete --exclude=.git . "user@hostname:/remote/source/code/path" \
[Remote Development Tips and Tricks](https://code.visualstudio.com/docs/remote/troubleshooting#_installing-a-supported-ssh-server)