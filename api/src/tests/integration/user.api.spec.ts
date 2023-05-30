import app from '../../app'
import request from 'supertest'

describe('Users API', () => {
  it('should return all user records from MongoDB', async () => {
    // Arrange
    const expected = {
      users: [
        {
          _id: '6474abffdfbf3ee0ce94b46d',
          firstName: 'Aubrey',
          lastName: 'Mina',
          userName: 'abmina',
        },
      ],
    }

    // Act
    const res = await request(app).get('/api/user')

    // Assert
    expect(res.status).toEqual(200)
    expect(res.body).toEqual(expected)
  })
})
