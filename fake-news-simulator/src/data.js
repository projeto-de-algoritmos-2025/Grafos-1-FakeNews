export const myGraphData = {
  nodes: [
    { id: 'Alice', group: 'Influencer' },
    { id: 'Bob', group: 'Friend' },
    { id: 'Carla', group: 'Family' },
    { id: 'David', group: 'Follower' },
    { id: 'Eva', group: 'Follower' },
    { id: 'Frank', group: 'Friend' }
  ],
  links: [
    { source: 'Alice', target: 'Bob', weight: 0.8 },
    { source: 'Bob', target: 'Carla', weight: 0.6 },
    { source: 'Alice', target: 'Carla', weight: 0.3 },
    { source: 'Alice', target: 'David', weight: 0.9 },
    { source: 'Bob', target: 'Eva', weight: 0.5 },
    { source: 'David', target: 'Eva', weight: 0.7 },
    { source: 'Carla', target: 'Frank', weight: 0.4 }
  ]
};