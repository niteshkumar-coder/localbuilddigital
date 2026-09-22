import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { SimulationParameters, SimulationResults, CameraMode, SimulationStage } from "../types/simulation";
import { calculateSimulation } from "../utils/roiCalculations";

const DEFAULT_PARAMS: SimulationParameters = {
  monthlyBudget: 50000,
  cpc: 25,
  leadConversionRate: 8,
  closeRate: 22,
  customerLTV: 45000,
  speed: 1,
};

const STAGES: SimulationStage[] = [
  "traffic",
  "engagement",
  "lead",
  "qualification",
  "customer",
  "revenue"
];

export function useSimulation() {
  const [params, setParams] = useState<SimulationParameters>(DEFAULT_PARAMS);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [cameraMode, setCameraMode] = useState<CameraMode>("overview");
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  // Memoized exact calculations
  const results: SimulationResults = useMemo(() => {
    return calculateSimulation(params);
  }, [params]);

  // Stage timeline cycling during playback
  useEffect(() => {
    if (!isPlaying) return;

    // Stage advance interval based on speed: 1x = 1800ms, 2x = 900ms, 4x = 450ms, 0.5x = 3600ms
    const intervalMs = Math.round(1800 / params.speed);
    const timer = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % STAGES.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, params.speed]);

  const updateParam = useCallback(<K extends keyof SimulationParameters>(
    key: K,
    value: SimulationParameters[K]
  ) => {
    setParams((prev) => ({
      ...prev,
      [key]: value
    }));
  }, []);

  const resetSimulation = useCallback(() => {
    setParams(DEFAULT_PARAMS);
    setIsPlaying(true);
    setCameraMode("overview");
    setActiveStageIndex(0);
    setSelectedNode(null);
  }, []);

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const setSpeed = useCallback((speed: 0.5 | 1 | 2 | 4) => {
    setParams((prev) => ({ ...prev, speed }));
  }, []);

  return {
    params,
    results,
    isPlaying,
    cameraMode,
    currentStage: STAGES[activeStageIndex],
    activeStageIndex,
    stages: STAGES,
    selectedNode,
    setSelectedNode,
    setCameraMode,
    updateParam,
    resetSimulation,
    togglePlay,
    setIsPlaying,
    setSpeed
  };
}
