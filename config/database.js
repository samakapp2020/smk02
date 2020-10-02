module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: 'mongodb+srv://smkuser01:Smkdb001@cluster0.jbvtr.mongodb.net/db01?retryWrites=true&w=majority'
      },
      options: {
        ssl: true
      },
    },
  },
});
