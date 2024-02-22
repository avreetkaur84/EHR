export const hospitalData = [
    {
      hospitalName: 'Hospital A',
      location: { city: 'CityA', state: 'StateA' },
      speciality: [
        {
          diseaseName: 'Cardiology',
          diseaseSeverity: {
            minor: { cost: 50000, time_period: '7 days' },
            moderate: { cost: 100000, time_period: '14 days' },
            major: { cost: 150000, time_period: '21 days' },
            extreme: { cost: 200000, time_period: '30 days' },
          },
        },
      ],
      doctors: [
        { name: 'Dr. Smith', doctorSpeciality: 'Cardiology' },
        { name: 'Dr. Johnson', doctorSpeciality: 'Orthopedics' },
        { name: 'Dr. Brown', doctorSpeciality: 'Pediatrics' },
        { name: 'Dr. Davis', doctorSpeciality: 'Neurology' },
        { name: 'Dr. White', doctorSpeciality: 'Dermatology' },
      ],
      operationSince: 2000,
      contact: { phoneNo: '123-456-7890', email: 'hospitalA@example.com' },
    },
    {
      hospitalName: 'Hospital B',
      location: { city: 'CityB', state: 'StateB' },
      speciality: [
        {
          diseaseName: 'Orthopedics',
          diseaseSeverity: {
            minor: { cost: 80000, time_period: '10 days' },
            moderate: { cost: 120000, time_period: '14 days' },
            major: { cost: 180000, time_period: '21 days' },
            extreme: { cost: 250000, time_period: '30 days' },
          },
        },
      ],
      doctors: [
        { name: 'Dr. Lee', doctorSpeciality: 'Gastroenterology' },
        { name: 'Dr. Turner', doctorSpeciality: 'Oncology' },
        { name: 'Dr. Adams', doctorSpeciality: 'Orthopedics' },
        { name: 'Dr. Robinson', doctorSpeciality: 'Endocrinology' },
        { name: 'Dr. Miller', doctorSpeciality: 'Psychiatry' },
      ],
      operationSince: 1995,
      contact: { phoneNo: '987-654-3210', email: 'hospitalB@example.com' },
    },
    {
      hospitalName: 'Hospital C',
      location: { city: 'CityC', state: 'StateC' },
      speciality: [
        {
          diseaseName: 'Gastroenterology',
          diseaseSeverity: {
            minor: { cost: 60000, time_period: '14 days' },
            moderate: { cost: 90000, time_period: '21 days' },
            major: { cost: 120000, time_period: '30 days' },
            extreme: { cost: 150000, time_period: '45 days' },
          },
        },
      ],
      doctors: [
        { name: 'Dr. Harris', doctorSpeciality: 'Gastroenterology' },
        { name: 'Dr. King', doctorSpeciality: 'Cardiology' },
        { name: 'Dr. Scott', doctorSpeciality: 'Orthopedics' },
        { name: 'Dr. Turner', doctorSpeciality: 'Neurology' },
        { name: 'Dr. Baker', doctorSpeciality: 'Dermatology' },
      ],
      operationSince: 2010,
      contact: { phoneNo: '345-678-9012', email: 'hospitalC@example.com' },
    },
    {
      hospitalName: 'Hospital D',
      location: { city: 'CityD', state: 'StateD' },
      speciality: [
        {
          diseaseName: 'Oncology',
          diseaseSeverity: {
            minor: { cost: 70000, time_period: '21 days' },
            moderate: { cost: 110000, time_period: '30 days' },
            major: { cost: 160000, time_period: '45 days' },
            extreme: { cost: 210000, time_period: '60 days' },
          },
        },
      ],
      doctors: [
        { name: 'Dr. Turner', doctorSpeciality: 'Gastroenterology' },
        { name: 'Dr. Parker', doctorSpeciality: 'Cardiology' },
        { name: 'Dr. Hughes', doctorSpeciality: 'Orthopedics' },
        { name: 'Dr. Bennett', doctorSpeciality: 'Neurology' },
        { name: 'Dr. Wilson', doctorSpeciality: 'Dermatology' },
      ],
      operationSince: 2005,
      contact: { phoneNo: '234-567-8901', email: 'hospitalD@example.com' },
    },
    {
      hospitalName: 'Hospital E',
      location: { city: 'CityE', state: 'StateE' },
      speciality: [
        {
          diseaseName: 'Pediatrics',
          diseaseSeverity: {
            minor: { cost: 55000, time_period: '10 days' },
            moderate: { cost: 90000, time_period: '14 days' },
            major: { cost: 130000, time_period: '21 days' },
            extreme: { cost: 170000, time_period: '30 days' },
          },
        },
      ],
      doctors: [
        { name: 'Dr. Brown', doctorSpeciality: 'Gastroenterology' },
        { name: 'Dr. Mitchell', doctorSpeciality: 'Cardiology' },
        { name: 'Dr. Taylor', doctorSpeciality: 'Orthopedics' },
        { name: 'Dr. Phillips', doctorSpeciality: 'Neurology' },
        { name: 'Dr. Hall', doctorSpeciality: 'Dermatology' },
      ],
      operationSince: 2015,
      contact: { phoneNo: '456-789-0123', email: 'hospitalE@example.com' },
    },
    {
      hospitalName: 'Hospital F',
      location: { city: 'CityF', state: 'StateF' },
      speciality: [
        {
          diseaseName: 'Neurology',
          diseaseSeverity: {
            minor: { cost: 90000, time_period: '14 days' },
            moderate: { cost: 130000, time_period: '21 days' },
            major: { cost: 180000, time_period: '30 days' },
            extreme: { cost: 230000, time_period: '45 days' },
          },
        },
      ],
      doctors: [
        { name: 'Dr. Davis', doctorSpeciality: 'Gastroenterology' },
        { name: 'Dr. Turner', doctorSpeciality: 'Cardiology' },
        { name: 'Dr. Miller', doctorSpeciality: 'Orthopedics' },
        { name: 'Dr. Robinson', doctorSpeciality: 'Neurology' },
        { name: 'Dr. Harris', doctorSpeciality: 'Dermatology' },
      ],
      operationSince: 2008,
      contact: { phoneNo: '789-012-3456', email: 'hospitalF@example.com' },
    },
    {
      hospitalName: 'Hospital G',
      location: { city: 'CityG', state: 'StateG' },
      speciality: [
        {
          diseaseName: 'Dermatology',
          diseaseSeverity: {
            minor: { cost: 75000, time_period: '21 days' },
            moderate: { cost: 110000, time_period: '30 days' },
            major: { cost: 160000, time_period: '45 days' },
            extreme: { cost: 200000, time_period: '60 days' },
          },
        },
      ],
      doctors: [
        { name: 'Dr. White', doctorSpeciality: 'Gastroenterology' },
        { name: 'Dr. Robinson', doctorSpeciality: 'Cardiology' },
        { name: 'Dr. Wilson', doctorSpeciality: 'Orthopedics' },
        { name: 'Dr. Mitchell', doctorSpeciality: 'Neurology' },
        { name: 'Dr. Parker', doctorSpeciality: 'Dermatology' },
      ],
      operationSince: 2012,
      contact: { phoneNo: '890-123-4567', email: 'hospitalG@example.com' },
    },
    {
      hospitalName: 'Hospital H',
      location: { city: 'CityH', state: 'StateH' },
      speciality: [
        {
          diseaseName: 'Endocrinology',
          diseaseSeverity: {
            minor: { cost: 85000, time_period: '14 days' },
            moderate: { cost: 120000, time_period: '21 days' },
            major: { cost: 170000, time_period: '30 days' },
            extreme: { cost: 220000, time_period: '45 days' },
          },
        },
      ],
      doctors: [
        { name: 'Dr. Turner', doctorSpeciality: 'Gastroenterology' },
        { name: 'Dr. Adams', doctorSpeciality: 'Cardiology' },
        { name: 'Dr. Miller', doctorSpeciality: 'Orthopedics' },
        { name: 'Dr. Bennett', doctorSpeciality: 'Neurology' },
        { name: 'Dr. Taylor', doctorSpeciality: 'Endocrinology' },
      ],
      operationSince: 2013,
      contact: { phoneNo: '567-890-1234', email: 'hospitalH@example.com' },
    },
    {
      hospitalName: 'Hospital I',
      location: { city: 'CityI', state: 'StateI' },
      speciality: [
        {
          diseaseName: 'Psychiatry',
          diseaseSeverity: {
            minor: { cost: 95000, time_period: '10 days' },
            moderate: { cost: 140000, time_period: '14 days' },
            major: { cost: 200000, time_period: '21 days' },
            extreme: { cost: 250000, time_period: '30 days' },
          },
        },
      ],
      doctors: [
        { name: 'Dr. Miller', doctorSpeciality: 'Gastroenterology' },
        { name: 'Dr. Baker', doctorSpeciality: 'Cardiology' },
        { name: 'Dr. Turner', doctorSpeciality: 'Orthopedics' },
        { name: 'Dr. Robinson', doctorSpeciality: 'Neurology' },
        { name: 'Dr. Hall', doctorSpeciality: 'Psychiatry' },
      ],
      operationSince: 2016,
      contact: { phoneNo: '234-567-8901', email: 'hospitalI@example.com' },
    },
    {
      hospitalName: 'Hospital J',
      location: { city: 'CityJ', state: 'StateJ' },
      speciality: [
        {
          diseaseName: 'Ophthalmology',
          diseaseSeverity: {
            minor: { cost: 70000, time_period: '14 days' },
            moderate: { cost: 110000, time_period: '21 days' },
            major: { cost: 160000, time_period: '30 days' },
            extreme: { cost: 210000, time_period: '45 days' },
          },
        },
      ],
      doctors: [
        { name: 'Dr. Turner', doctorSpeciality: 'Gastroenterology' },
        { name: 'Dr. Parker', doctorSpeciality: 'Cardiology' },
        { name: 'Dr. Hughes', doctorSpeciality: 'Orthopedics' },
        { name: 'Dr. Bennett', doctorSpeciality: 'Neurology' },
        { name: 'Dr. Turner', doctorSpeciality: 'Ophthalmology' },
      ],
      operationSince: 2009,
      contact: { phoneNo: '123-456-7890', email: 'hospitalJ@example.com' },
    },
    {
      hospitalName: 'Hospital K',
      location: { city: 'CityK', state: 'StateK' },
      speciality: [
        {
          diseaseName: 'Urology',
          diseaseSeverity: {
            minor: { cost: 60000, time_period: '10 days' },
            moderate: { cost: 90000, time_period: '14 days' },
            major: { cost: 130000, time_period: '21 days' },
            extreme: { cost: 170000, time_period: '30 days' },
          },
        },
      ],
      doctors: [
        { name: 'Dr. Brown', doctorSpeciality: 'Gastroenterology' },
        { name: 'Dr. Mitchell', doctorSpeciality: 'Cardiology' },
        { name: 'Dr. Taylor', doctorSpeciality: 'Orthopedics' },
        { name: 'Dr. Phillips', doctorSpeciality: 'Neurology' },
        { name: 'Dr. Hall', doctorSpeciality: 'Urology' },
      ],
      operationSince: 2014,
      contact: { phoneNo: '987-654-3210', email: 'hospitalK@example.com' },
    },
    {
      hospitalName: 'Hospital L',
      location: { city: 'CityL', state: 'StateL' },
      speciality: [
        {
          diseaseName: 'Rheumatology',
          diseaseSeverity: {
            minor: { cost: 80000, time_period: '21 days' },
            moderate: { cost: 120000, time_period: '30 days' },
            major: { cost: 180000, time_period: '45 days' },
            extreme: { cost: 250000, time_period: '60 days' },
          },
        },
      ],
      doctors: [
        { name: 'Dr. White', doctorSpeciality: 'Gastroenterology' },
        { name: 'Dr. Robinson', doctorSpeciality: 'Cardiology' },
        { name: 'Dr. Wilson', doctorSpeciality: 'Orthopedics' },
        { name: 'Dr. Mitchell', doctorSpeciality: 'Neurology' },
        { name: 'Dr. Parker', doctorSpeciality: 'Rheumatology' },
      ],
      operationSince: 2011,
      contact: { phoneNo: '345-678-9012', email: 'hospitalL@example.com' },
    },
    {
      hospitalName: 'Hospital M',
      location: { city: 'CityM', state: 'StateM' },
      speciality: [
        {
          diseaseName: 'Nephrology',
          diseaseSeverity: {
            minor: { cost: 90000, time_period: '14 days' },
            moderate: { cost: 130000, time_period: '21 days' },
            major: { cost: 180000, time_period: '30 days' },
            extreme: { cost: 230000, time_period: '45 days' },
          },
        },
      ],
      doctors: [
        { name: 'Dr. Harris', doctorSpeciality: 'Gastroenterology' },
        { name: 'Dr. King', doctorSpeciality: 'Cardiology' },
        { name: 'Dr. Scott', doctorSpeciality: 'Orthopedics' },
        { name: 'Dr. Turner', doctorSpeciality: 'Neurology' },
        { name: 'Dr. Baker', doctorSpeciality: 'Nephrology' },
      ],
      operationSince: 2018,
      contact: { phoneNo: '234-567-8901', email: 'hospitalM@example.com' },
    },
    {
      hospitalName: 'Hospital N',
      location: { city: 'CityN', state: 'StateN' },
      speciality: [
        {
          diseaseName: 'Hematology',
          diseaseSeverity: {
            minor: { cost: 70000, time_period: '21 days' },
            moderate: { cost: 110000, time_period: '30 days' },
            major: { cost: 160000, time_period: '45 days' },
            extreme: { cost: 210000, time_period: '60 days' },
          },
        },
      ],
      doctors: [
        { name: 'Dr. Turner', doctorSpeciality: 'Gastroenterology' },
        { name: 'Dr. Parker', doctorSpeciality: 'Cardiology' },
        { name: 'Dr. Hughes', doctorSpeciality: 'Orthopedics' },
        { name: 'Dr. Bennett', doctorSpeciality: 'Neurology' },
        { name: 'Dr. Turner', doctorSpeciality: 'Hematology' },
      ],
      operationSince: 2017,
      contact: { phoneNo: '123-456-7890', email: 'hospitalN@example.com' },
    },
    {
      hospitalName: 'Hospital O',
      location: { city: 'CityO', state: 'StateO' },
      speciality: [
        {
          diseaseName: 'Pulmonology',
          diseaseSeverity: {
            minor: { cost: 60000, time_period: '10 days' },
            moderate: { cost: 90000, time_period: '14 days' },
            major: { cost: 130000, time_period: '21 days' },
            extreme: { cost: 170000, time_period: '30 days' },
          },
        },
      ],
      doctors: [
        { name: 'Dr. Brown', doctorSpeciality: 'Gastroenterology' },
        { name: 'Dr. Mitchell', doctorSpeciality: 'Cardiology' },
        { name: 'Dr. Taylor', doctorSpeciality: 'Orthopedics' },
        { name: 'Dr. Phillips', doctorSpeciality: 'Neurology' },
        { name: 'Dr. Hall', doctorSpeciality: 'Pulmonology' },
      ],
      operationSince: 2019,
      contact: { phoneNo: '987-654-3210', email: 'hospitalO@example.com' },
    },
  ];