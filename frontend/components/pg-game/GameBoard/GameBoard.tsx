import React from 'react';
import { useDimensions, useBoard, usePlayerScores, useGameState } from '../../../hooks/useGameContract';
import { Board } from '../../Board';
import { ConnectWallet } from '../../ConnectWallet';

export const GameBoard: React.FC = () => {
  const dim = useDimensions();
  const board = useBoard();
  const scores = usePlayerScores();
  const { status } = useGameState() || {};

  if (!dim) {
    return (
      <div className="flex items-center justify-center flex-col h-full">
        <h1 className="text-xl">Contract Not Found</h1>
        <p className="text-md max-w-sm text-center">
          Make sure the chain is running and the contract address is correct.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="w-full h-screen lg:hidden flex items-center text-center justify-center flex-col">
        <h1>Please use a larger screen...</h1>
      </div>

      <div className="hidden lg:block">
        <div className="fixed right-3 bottom-3 max-w-sm z-10">
          <ConnectWallet />
        </div>

        <Board
          boardWidth="80%"
          board={board}
          dimensions={dim}
          scores={scores}
          className="w-full h-full"
          status={status}
        />
      </div>
    </>
  );
};
