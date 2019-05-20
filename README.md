# parabox-demo


1. Install

    please install truffle first.
    ```shell
    yarn global add truffle
    ```

2. Download

    ```shell
    git clone https://github.com/parabox-network/parabox-demo.git
    yarn install
    ```

3. Add privateKey

   Add your privateKey to truffle.js

4. Run

   ```
   yarn migrate
   node src/index.js
   ```



#### Addition Information

#####  Compile the smart contract.

       
```
truffle compile
```



##### migration


First, add your contracts in `./contracts​`, 

Second, add your migration scripts in `./migration`, for the details, please refer [RUNNING MIGRATIONS](https://truffleframework.com/docs/truffle/getting-started/running-migrations) for more details.

Input the command to do migration. (Note that we can **NOT** use `truffle migrate` command here...)
```
yarn migrate
```
