import { InMemoryDbService } from 'angular-in-memory-web-api';
export class APIService implements InMemoryDbService {
  createDb() {
    const students = [
      { id: 1,
        fullName: 'Camila Mesa',
        photo: 'http://i.pravatar.cc/300?img=1',
        grades: [
          {assignment: 4.5},
          {assignment: 3.2},
          {assignment: 4.0},
          {assignment: 3.9},
          {assignment: 4.8},
          {assignment: 5.0}
        ],
        deliveredhmwkrs: 6,
        missingHmwrks: 0,
        lastUpdate: '1501038596527'
      },
      { id: 2,
        fullName: 'Andres Aguirre',
        photo: 'http://i.pravatar.cc/300?img=2',
        grades: [
          {assignment: 4.5},
          {assignment: 3.2},
          {assignment: 4.0},
          {assignment: 3.9},
          {assignment: 4.0},
          {assignment: 5.0}
        ],
        deliveredhmwkrs: 6,
        missingHmwrks: 0,
        lastUpdate: '1501038596527'
      },
      { id: 3,
        fullName: 'Juan Rendon',
        photo: 'http://i.pravatar.cc/300?img=3',
        grades: [
          {assignment: 4.5},
          {assignment: 3.2},
          {assignment: 4.0},
          {assignment: 3.9},
          {assignment: 4.8},
          {assignment: 3.6}
        ],
        deliveredhmwkrs: 6,
        missingHmwrks: 0,
        lastUpdate: '1501038596527'
      },
      { id: 4,
        fullName: 'Jose Camargo',
        photo: 'http://i.pravatar.cc/300?img=4',
        grades: [
          {assignment: 4.5},
          {assignment: 3.2},
          {assignment: 3.2},
          {assignment: 3.9},
          {assignment: 4.6},
          {assignment: 5.0}
        ],
        deliveredhmwkrs: 6,
        missingHmwrks: 0,
        lastUpdate: '1501038596527'
      },
      { id: 5,
        fullName: 'Daniela Lopez',
        photo: 'http://i.pravatar.cc/300?img=5',
        grades: [
          {assignment: 4.5},
          {assignment: 3.2},
          {assignment: 4.0},
          {assignment: 3.9},
          {assignment: 4.8},
          {assignment: 2.6}
        ],
        deliveredhmwkrs: 6,
        missingHmwrks: 0,
        lastUpdate: '1501038596527'
      },
      { id: 6,
        fullName: 'Susana Hoyos',
        photo: 'http://i.pravatar.cc/300?img=6',
        grades: [
          {assignment: 4.5},
          {assignment: 3.2},
          {assignment: 4.0},
          {assignment: 3.9},
          {assignment: 4.8},
          {assignment: 4.1}
        ],
        deliveredhmwkrs: 6,
        missingHmwrks: 0,
        lastUpdate: '1501038596527'
      },
      { id: 7,
        fullName: 'Manuela Giraldo',
        photo: 'http://i.pravatar.cc/300?img=7',
        grades: [
          {assignment: 4.5},
          {assignment: 3.2},
          {assignment: 4.0},
          {assignment: 3.9},
          {assignment: 4.8},
          {assignment: 0.0}
        ],
        deliveredhmwkrs: 5,
        missingHmwrks: 1,
        lastUpdate: '1501038596527'
      },

    ];
    return {students};
  }
}