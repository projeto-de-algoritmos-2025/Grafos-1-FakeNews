export const myGraphData = {
  nodes: [
  { id: 'Alice', group: 'Influencer', avatar: 'woman.png' },
  { id: 'Bob', group: 'Friend', avatar: 'man.png' },
  { id: 'Carla', group: 'Family', avatar: 'woman.png' },
  { id: 'David', group: 'Follower', avatar: 'man.png' },
  { id: 'Eva', group: 'Follower', avatar: 'woman.png' },
  { id: '6', group: 'Friend', avatar: 'man.png' },
  { id: '7', group: 'Friend', avatar: 'woman.png' },
  { id: '8', group: 'Friend', avatar: 'man.png' },
  { id: '9', group: 'Friend', avatar: 'woman.png' },
  { id: '10', group: 'Friend', avatar: 'man.png' },
  ],
  links: [
    { source: 'Alice', target: 'Bob', weight: 0.8 },
    { source: 'Bob', target: 'Carla', weight: 0.6 },
    { source: 'Alice', target: 'Carla', weight: 0.3 },
    { source: 'Alice', target: 'David', weight: 0.9 },
    { source: 'Bob', target: 'Eva', weight: 0.5 },
    { source: 'Bob', target: 'Alice', weight: 0.5 },
    { source: 'David', target: 'Eva', weight: 0.7 },
    { source: '10', target: '7', weight: 0.4 },
    { source: 'Eva', target: '10', weight: 0.4 },
    { source: 'Carla', target: '9', weight: 0.4 },
    { source: 'Carla', target: '6', weight: 0.4 },
    { source: '6', target: '8', weight: 0.4 },
  ]
};