interface ConfigInterface {
  apis: any,
}

export default {
  apis: {
    host: process.env.EXAMPLE_API,
  },
} as ConfigInterface
