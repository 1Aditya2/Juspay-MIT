export const handleHeroSwap = (timelines, collisions) => {
    collisions.forEach(([idA, idB]) => {
      const timelineA = timelines.get(idA);
      const timelineB = timelines.get(idB);
  
      if (!timelineA || !timelineB) return;
  
      const queueA = timelineA.getRemainingQueue();
      const queueB = timelineB.getRemainingQueue();
  
      timelineA.replaceQueue(queueB);
      timelineB.replaceQueue(queueA);
    });
  };
  