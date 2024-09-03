export const signup = [
  {
    type: 'grid',
    span: 3,
    fields: [
      {
        type: 'text',
        label: 'Full Name',
        name: 'name',
        placeholder: 'Enter Full Name',
        span: 3,
        value: '',
        required: true,
        validations: [
          {
            type: 'pattern',
            message: 'Please enter a valid name'
          }
        ]
      },
      {
        type: 'text',
        label: 'Email',
        name: 'email',
        placeholder: 'Enter Email',
        span: 3,
        value: '',
        required: true,
        validations: [
          {
            type: 'pattern',
            message: 'Please enter a valid email'
          }
        ]
      },
      {
        type: 'text',
        label: 'Phone',
        name: 'Phone',
        placeholder: 'Enter Phone',
        span: 3,
        value: '',
        required: true,
        validations: [
          {
            type: 'pattern',
            message: 'Please enter a valid phone'
          }
        ]
      },
      {
        type: 'select',
        label: 'Gender',
        name: 'gender',
        placeholder: 'Select gender',
        span: 3,
        value: '',
        required: true,
        options: [
          {
            label: 'Male',
            value: 'Male',
          },
          {
            label: 'Female',
            value: 'female',
          },
          {
            label: 'Others',
            value: 'others',
          },
        ],
        validations: [
          {
            type: 'required',
            message: 'Please select a valid gender'
          }
        ]
      },
    ]
  }
];
